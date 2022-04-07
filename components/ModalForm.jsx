import React from "react";

export default function ModalForm({setModalForm}) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setModalForm(false)}>&times;</span>
        <p>
          <b style={{ color: "red", textTransform: "uppercase" }}>
            Gracias por escribirnos...
          </b>{" "}
          <br /> En breve responderemos tu mensaje
        </p>
      </div>
    </div>
  );
}
