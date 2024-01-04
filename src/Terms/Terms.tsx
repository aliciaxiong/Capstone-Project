import logo from '../Images/logo.png';
import './Terms.css';

const Terms = () => {
  return (
    <>
        <div className='termsofService-Container'>
            
            <img src={logo} alt="Logo" className='terms-photo'/>
                
            <div className="termsofService-Details">
                <p className='Header1'>Home Value Spot Terms of Service ("Terms")</p>
                
                <p className='dateUpdate'>Last updated: Jan 01, 2024</p>

                <p>
                    Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://www.HomeValueSpot website (the "Service") operated by Our Company ("us", "we", or "our").
                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                </p>
                
                <p>
                    By using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using our services. To access certain features of our website, you may need to create a user account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account. You agree to use our website for lawful purposes only and in compliance with all applicable laws and regulations. You may not use our platform to engage in any illegal or unauthorized activities.
                    We reserve the right to terminate or suspend your account and access to our website at our sole discretion, without notice, for any reason, including but not limited to a breach of these Terms.
                </p>

                <p>
                    Our website is provided on an "as is" and "as available" basis, without any warranties of any kind, either expressed or implied. We do not guarantee the accuracy, completeness, or timeliness of the information on our website.
                    We reserve the right to modify or update these Terms at any time. Your continued use of our website after any changes will constitute your acceptance of the revised Terms
                </p>

                <p>
                    To the fullest extent permitted by law, Home Value Spot shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (a) your access to or use of or inability to access or use our website; (b) any unauthorized access to or use of our secure servers and/or any personal information stored therein.
                </p>
            </div>
        </div>
    </>

  )
}
export default Terms