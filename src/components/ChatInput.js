import { useState } from "react";

export const ChatInput = () => {
    const SendChat = (event) => {
        event.preventDefault();
        console.log(chatContent);
        setChatContent("")
    }

    const [chatContent, setChatContent] = useState("");

    return (
        <div>
            <form className="input-group" onSubmit={SendChat}>
                <input type="text"
                    value={chatContent} onChange={(e) => setChatContent(e.target.value)}
                    className="form-control" placeholder="Stuur een bericht" required
                />
                <div className="input-group-append">
                    <input type="submit" className="btn btn-outline-primary"
                        value="Versturen"
                        style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
                    />
                </div>
            </form>
        </div>
    )
}