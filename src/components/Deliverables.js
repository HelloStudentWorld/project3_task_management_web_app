// src/components/Deliverables.js
import React from 'react';
import './Deliverables.css';

const Deliverables = () => {
  return (
    <div className="deliverables-container">
      <h1>Project Deliverables</h1>
      
      <section>
        <h2>User Stories</h2>
        <ul>
          <li>As a user, I want to create new tasks so I can keep track of my to-do items</li>
          <li>As a user, I want to mark tasks as complete so I can track my progress</li>
          <li>As a user, I want to delete tasks that are no longer needed</li>
          <li>As a user, I want to filter tasks by status</li>
          <li>As a user, I want to use a contact form to send feedback</li>
        </ul>
      </section>

      <section>
        <h2>Wireframes</h2>
        
        <div className="wireframe-container">
          <h3>Todo List Page</h3>
          <div className="wireframe">
            <div className="header-container">
              <div className="nav">Navigation Bar</div>
            </div>
            
            <div className="main-container">
              <div className="todo-section">
                <div className="filter-container">
                  <div>Filter Controls</div>
                </div>
                
                <div className="todo-list-container">
                  <div className="add-todo">Add Todo Form</div>
                  <div className="todo-items">
                    <div className="todo-item">Todo Item 1</div>
                    <div className="todo-item">Todo Item 2</div>
                    <div className="todo-item">Todo Item 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h3>Contact Page</h3>
          <div className="wireframe">
            <div className="header-container">
              <div className="nav">Navigation Bar</div>
            </div>
            
            <div className="contact-container">
              <div className="contact-form">
                <div>Name Input</div>
                <div>Email Input</div>
                <div>Message Input</div>
                <div>Submit Button</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>State Tree</h2>
        <div className="state-tree">
          <div className="state-node root">
            <div className="node-content">Store</div>
            <div className="node-children">
              <div className="state-node">
                <div className="node-content">todos: []</div>
                <div className="node-children">
                  <div className="state-node leaf">
                    <div className="node-content">
                      {`{
  id: number,
  text: string,
  completed: boolean
}`}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="state-node">
                <div className="node-content">filters</div>
                <div className="node-children">
                  <div className="state-node leaf">
                    <div className="node-content">
                      status: 'all' | 'active' | 'completed'
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="state-node">
                <div className="node-content">form</div>
                <div className="node-children">
                  <div className="state-node leaf">
                    <div className="node-content">
                      {`contact: {
  name: string,
  email: string,
  message: string
}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Technologies Used</h2>
        <div className="tech-stack">
          <h2>Technologies Used</h2>
          <div className="tech-item">
            <strong>React:</strong> A JavaScript library for building interactive user interfaces.
          </div>
          <div className="tech-item">
            <strong>Redux:</strong> State management for predictable data flow in React applications.
          </div>
          <div className="tech-item">
            <strong>React Router:</strong> Navigation and routing solution for React single-page applications.
          </div>
          <div className="tech-item">
            <strong>CSS:</strong> Styling language used for designing the visual presentation.
          </div>
          <div className="tech-item">
            <strong>GitHub Pages:</strong> Free hosting service for deploying static web applications.
          </div>
        </div>
      </section>

      <section>
        <h2>Future Improvements</h2>
        <ul>
          <li>Backend Integration</li>
          <li>User Authentication</li>
          <li>Enhanced Filtering</li>
          <li>Task Categories</li>
          <li>Dark Mode</li>
        </ul>
      </section>
    </div>
  );
};

export default Deliverables;