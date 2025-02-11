export default function ExhibitorForm({ formData, handleChange }) {
    return (
        <div className="container">
          <h1>EVENT PARTICIPATOR - EXHIBITOR</h1>
          <h2>Please choose a BOOTH position that you expect:</h2>
          <p>
          You may choose the priority option and backup options 
          if your priority has been reserved for another industry that settle payment first, we will automatically act with your backup options
          </p>
          <p>
          Ex: if you wish to book booth 5 as a priority, booths 8 and 13 as backup options, please type in the answer: 05 08 13
          </p>
          <p>
    
            Kindly visit:   
            <a href="https://www.vgu-career-fair-2024.com/exhibition" target="_blank" rel="noopener noreferrer">
            https://www.vgu-career-fair-2024.com/exhibition
            </a>
             to monitor the industries interested in booths. 
          </p>
        </div>
      );
  }
  