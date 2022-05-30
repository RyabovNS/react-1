import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        { (store) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
            }
        }
    </StoreContext.Consumer>
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let f2 = () => {
    return {

    }
}

const SuperDialogsContainer = connect(mapStateToProps, f2)(Dialogs);

export default DialogsContainer;