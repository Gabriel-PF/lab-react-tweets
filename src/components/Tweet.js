import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet, name, image, handle, timestamp }) {
  return (
    <div className="tweet">
      <ProfileImage src={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={tweet} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}


export default Tweet;