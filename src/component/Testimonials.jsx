import React from 'react';

const Testimonials = () => {
  return (
    <section>
      <div>
        <img src="../images/image-emily.jpg" alt="Emily" />
        <p style={{ color: 'hsl(232, 10%, 55%)' }}>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
        <div>
          <h4>Emily R.</h4>
          <small style={{ color: 'hsl(210, 4%, 67%)' }}>Marketing Director</small>
        </div>
      </div>
      <div>
        <img src="../images/image-thomas.jpg" alt="Thomas" />
        <p style={{ color: 'hsl(232, 10%, 55%)' }}>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
        <div>
          <h4>Thomas S.</h4>
          <small style={{ color: 'hsl(210, 4%, 67%)' }}>Chief Operating Officer</small>
        </div>
      </div>
      <div>
        <img src="../images/image-jennie.jpg" alt="Jennie" />
        <p style={{ color: 'hsl(232, 10%, 55%)' }}>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
        <div>
          <h4>Jennie F.</h4>
          <small style={{ color: 'hsl(210, 4%, 67%)' }}>Business Owner</small>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;