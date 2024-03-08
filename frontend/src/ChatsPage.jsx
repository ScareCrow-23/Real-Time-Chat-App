import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <PrettyChatWindow
          projectId="28ecd8b9-a398-4107-89cb-1fa2aa267509"
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: "100%" }}
        />
      </div>
    </>
  );
};

export default ChatsPage;
