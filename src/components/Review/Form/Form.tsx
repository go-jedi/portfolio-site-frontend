'use client';
import React from "react";

import {useAppDispatch} from '@/redux/store';
import {useSelector} from 'react-redux';
import {fetchCreate} from "@/redux/review/asyncActions/create";
import {selectorReview} from "@/redux/review/selectors";

import {SubmitHandler, useForm} from "react-hook-form"
import {message, Modal, Spin} from 'antd';

import {IoSendOutline} from 'react-icons/io5';

import styles from "@/components/Review/Form/Form.module.scss";
import FormSkeleton from "@/components/Review/Form/FormSkeleton/FormSkeleton";
import StarRate from "@/instruments/StarRate/StarRate";

type CreateForm = {
    username: string;
    message: string;
}

const Form: React.FC = () => {
    const dispatch = useAppDispatch()
    const {status} = useSelector(selectorReview)

    const [rating, setRating] = React.useState<number>(0);
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [spinning, setSpinning] = React.useState<boolean>(false);

    const [messageApi, contextHolder] = message.useMessage();

    const {register, getValues, reset, formState: {errors}, handleSubmit} = useForm<CreateForm>()

    const showModal = (): void => {
        try {
            setModalOpen(true);
        } catch (error) {
            console.log("error in showModal:", error);
        }
    };

    const handleOk = async (): Promise<void> => {
        try {
            setModalOpen(false)
            setSpinning(true)

            const formData = {
                username: getValues("username"),
                message: getValues("message"),
                rating: rating
            }

            if (rating === 0) {
                formData.rating = 5
            }

            await dispatch(fetchCreate(formData))

            setSpinning(false)

            messageApi.open({
                type: 'success',
                duration: 4,
                content: 'Отзыв успешно создан и в ближайшее время будет опубликован',
            });

            reset();

            setRating(0)
        } catch (error) {
            console.log("error in handleOk:", error)
        }
    }

    const handleCancel = (): void => {
        try {
            setModalOpen(false)
        } catch (error) {
            console.log("error in handleOk:", error)
        }
    }

    const onSubmit: SubmitHandler<CreateForm> = (_: CreateForm): void => {
        try {
            showModal()
        } catch (error) {
            console.log("error in onSubmit:", error)
        }
    }

    return (
        <div
            className={styles.form}
        >
            {
                status === "loading" ? (
                    <FormSkeleton/>
                ) : (
                    <>
                        {contextHolder}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.block}>
                                <div className={styles.row}>
                                    <input
                                        className={styles.input}
                                        style={{borderBottom: errors.username ? '1px solid red' : 'none'}}
                                        type="text"
                                        placeholder="Имя"
                                        {...register("username", {required: true})}
                                        aria-invalid={errors.username ? "true" : "false"}
                                    />
                                </div>
                                <div className={styles.row}>
                                    <StarRate rating={rating} onSetRate={(e: number) => setRating(e)}/>
                                </div>
                            </div>
                            {errors.username?.type === "required" && (
                                <p className={styles.error} role="alert">Поле обязательно для заполнения</p>
                            )}
                            <div className={styles.textarea}>
                            <textarea
                                placeholder="Сообщение..."
                                style={{border: errors.message ? '1px solid red' : 'none'}}
                                {...register("message", {required: true})}
                                aria-invalid={errors.message ? "true" : "false"}
                            ></textarea>
                                <button className={styles.btn} type={"submit"}>
                                    <IoSendOutline className={styles.icon}/>
                                </button>
                            </div>
                            {errors.message?.type === "required" && (
                                <p className={styles.error} role="alert">Поле обязательно для заполнения</p>
                            )}
                        </form>
                        <Modal
                            title="Отзыв"
                            open={modalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            okText="Да"
                            cancelText="Отмена"
                        >
                            <p>Вы действительно хотите опубликовать отзыв?</p>
                        </Modal>
                        <Spin tip="Идет создание отзыва" spinning={spinning} fullscreen/>
                    </>
                )
            }
        </div>
    )
}

export default Form;