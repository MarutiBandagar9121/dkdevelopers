import React from 'react';
import styles from '../styles/SalesEnquireyFormComponent.module.css';
import { X } from 'lucide-react';


interface SalesEnquireyFormComponent {
  onClose: () => void;
}

const SalesEnquireyComponentForm: React.FC<SalesEnquireyFormComponent> = ({ onClose }) => {
  //interface FormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    alert('Form submitted!');
    onClose(); // Close the pop-up after submission
  };

  return (
    <div className={styles.popupoverlay}>
      <div className={styles.popupcontent}>
        <button onClick={onClose}><X color="#e20808" /></button>
        <h2 className='m-2'>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SalesEnquireyComponentForm;