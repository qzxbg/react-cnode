import  {createStore, combineReducers} from "redux";
import topicList from "./reducer/topicList";
import topicDetail from "./reducer/topicDetail";
import userInfo from "./reducer/userInfo";
import userConllectTopic from "./reducer/userCollectTopic";
const store = createStore(combineReducers({
    topicList,
    topicDetail,
    userInfo,
    userConllectTopic
}));

export default store;