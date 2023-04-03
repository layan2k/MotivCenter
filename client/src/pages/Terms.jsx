import styled from 'styled-components';

const TermsAndConditions = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  ol {
    list-style: decimal;
    margin-left: 20px;
    margin-bottom: 20px;

    li {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 10px;
    }
  }

  a {
    color: blue;
    text-decoration: underline;

    &:hover {
      color: #007FFF;
    }
  }
`;

const Terms = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "none" }}>Welcome to Motivcenter</h1>
            <TermsAndConditions>
                <h2>Terms and Conditions</h2>
                <p>By accessing and using any of the services provided by Motivcenter, including but not limited to training programs, coaching sessions, and webinars, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you may not access or use any of the services provided by Motivcenter.</p>
                <ol>
                    <li>All fees for Motivcenter's services must be paid in full prior to attending any training sessions or accessing any resources.</li>
                    <li>All intellectual property rights in the materials provided by Motivcenter, including but not limited to training materials, videos, and webinars, are the property of Motivcenter and are protected by copyright laws.</li>
                    <li>All information shared by you during coaching sessions or training programs will be kept confidential by Motivcenter, except as required by law.</li>
                    <li>Motivcenter shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, including but not limited to loss of revenue, loss of profits, or loss of data.</li>
                    <li>We reserve the right to terminate our services to you at any time, with or without cause.</li>
                    <li>We reserve the right to modify these terms and conditions at any time, with or without notice.</li>
                </ol>
                <p>If you have any questions or concerns about these terms and conditions, please <a href="/contact">contact us</a>.</p>
            </TermsAndConditions>
        </div>
    );
};

export default Terms;
