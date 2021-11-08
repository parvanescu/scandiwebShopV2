import React, {useEffect, useState} from 'react';
import {NotificationContainer} from "./components/NotificationContainer";
import {NotificationToast} from "./components/NotificationToast";
import {ToastTextContainer} from "./components/ToastText";

const Toast = (props) => {

    return (
        <NotificationContainer>
            <NotificationToast>
                <ToastTextContainer>
                    {props.title}
                    {props.message}
                </ToastTextContainer>
            </NotificationToast>
        </NotificationContainer>
    )
}

export default Toast();