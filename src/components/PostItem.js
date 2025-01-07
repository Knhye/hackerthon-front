import React from "react";
import ProfileImage from "../assets/images/exampleProfile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const PostItem = ({ post, onEdit, onDelete }) => {
  return (
    <div style={styles.card}>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          fontFamily: "GowunBatang-Regular",
        }}
      >
        <img
          src={ProfileImage}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "100%",
            marginLeft: "20px",
          }}
        ></img>
        <h1>Username</h1>
      </div>
      <div style={{ marginLeft: "150px" }}>
        <h3 style={styles.title}>{post.title}</h3>
        <p style={styles.content}>{post.content}</p>
        <p style={styles.date}>{new Date(post.date).toLocaleString()}</p>
      </div>

      <div style={styles.buttons}>
        <FontAwesomeIcon
          icon={faPen}
          style={styles.editButton}
          onClick={() => onEdit(post)}
        >
          수정
        </FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTrashCan}
          style={styles.deleteButton}
          onClick={() => onDelete(post.id)}
        >
          삭제
        </FontAwesomeIcon>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    fontFamily: "GowunBatang-Regular",
  },

  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    fontFamily: "GowunBatang-Regular",
  },
  content: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  },
  date: {
    fontSize: "14px",
    color: "#aaa",
    marginBottom: "15px",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    margin: "-20% 0 16% 80%",
  },
  editButton: {
    padding: "5px 10px",
    fontSize: "20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "20px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default PostItem;
