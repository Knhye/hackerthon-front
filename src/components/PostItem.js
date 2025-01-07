import React from "react";

const PostItem = ({ post, onEdit, onDelete }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{post.title}</h3>
      <p style={styles.content}>{post.content}</p>
      <p style={styles.date}>{new Date(post.date).toLocaleString()}</p>
      <div style={styles.buttons}>
        <button style={styles.editButton} onClick={() => onEdit(post)}>
          수정
        </button>
        <button style={styles.deleteButton} onClick={() => onDelete(post.id)}>
          삭제
        </button>
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
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
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
  },
  editButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default PostItem;
