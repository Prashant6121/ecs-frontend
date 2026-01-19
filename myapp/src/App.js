export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 ECS Frontend Running</h1>
        <p style={styles.subtitle}>
          It's First React application successfully deployed By Prashant on
        </p>

        <div style={styles.badges}>
          <span style={styles.badge}>AWS ECS</span>
          <span style={styles.badge}>Fargate</span>
          <span style={styles.badge}>GitHub Actions</span>
          <span style={styles.badge}>ECR</span>
          <span style={styles.badge}>ALB</span>
        </div>

        <p style={styles.footer}>
          🎉 Deployment Successful
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "500px",
    width: "90%",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#2d3748",
  },
  subtitle: {
    fontSize: "16px",
    color: "#4a5568",
    marginBottom: "20px",
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  badge: {
    background: "#edf2f7",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "14px",
    color: "#2d3748",
    fontWeight: "bold",
  },
  footer: {
    fontSize: "14px",
    color: "#718096",
  },
};
