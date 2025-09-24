## 2. SCALABILITY

**Conceptual Insight:**  
Applications must handle growing numbers of users without performance degradation.

**Reference Example:**

- Research on **real-time communication platforms** emphasizes **horizontal scaling** for WebSocket servers to manage multiple simultaneous connections.
- Cloud scaling guides suggest **load balancers, stateless servers**, and **database sharding** for scalable architectures.

**How it influenced your app:**

- Backend is designed to be **stateless**, allowing horizontal scaling across multiple server instances.
- Real-time features (chat, notifications) use **scalable technologies** like **Socket.IO with Redis Pub/Sub**.
- Database (MongoDB) is designed with **indexing and query optimization** for faster lookups as users grow.
