import React from 'react';
import "./cardDetails.css";
import { DateConverter } from '../DateConverter';

const CardDetails = ({ item, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-content">
          <div className="card">
            <div className="card-thumbnail">
              <img src={item.thumbnail?.small} alt="Thumbnail" />
            </div>
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.content}</p>
              <div className="card-footer">
                <div className="author-info">
                    <img className="author-avatar" src={item.author?.avatar}alt="author-avatar" /> 
                  <span className="author">{item.author.name}</span>
                  <span className="author">{item.author.role}</span>
                </div>
                <span className="author-info">{DateConverter(item.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;