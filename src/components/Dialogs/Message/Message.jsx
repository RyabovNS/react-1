import s from "../Dialogs.module.css";

export const Message = (props) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    );
}

export default Message;