import logo from '../Images/logo.png';
import './Privacy.css';

const Privacy = () => {
  return (
    <>
        <div className="Privacy-Container">
            <img src={logo} alt="Logo" className='terms-photo'/>
            <div className='privacy-details'>
                <p className='Header1'>Home Value Spot Privacy Policy</p>
                <p className='dateUpdate'>Last updated: Jan 01, 2024</p>

                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                <p><b><u>Information We Collect:</u></b></p>

                <p><b>
                    We may collect personal information from you when you use our website, including but not limited to:</b>
                    
                <p>Contact information (such as name, email address, phone number) | Demographic information (such as location, preferences) | Account information (if you create an account on our platform) | Property information submitted by users</p>
                    
                </p>

                <p>
                    <b>How We Use Your Information</b>
                    <br />
                    We may use the collected information for the following purposes:
                    To provide and improve our services
                    To personalize your experience on our website
                    To communicate with you about our services and updates
                    To respond to inquiries and provide customer support
                    To conduct research and analysis
                </p>

                <p>
                    <b>Sharing Your Information</b>
                    <br />
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share your information with:
                    Service providers who assist us in operating our website and providing services
                    Law enforcement or regulatory authorities when required by law
                </p>

                <p>
                    <b>Cookies and Tracking Technologies</b>
                    <br />
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.
                </p>

                <p>
                    <b>Security</b>
                    <br />
                    We take reasonable measures to protect the confidentiality and security of your personal information. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                </p>

                <p>
                    <b>Your Choices</b>
                    <br />
                    You can choose not to provide certain information, but this may limit your ability to use some features of our website. You may also opt-out of receiving promotional emails from us.
                </p>

                <p>
                    <b>Children Privacy</b>
                    <br />
                    Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
                
                <p>
                    <b>Changes to this Privacy Policy</b>
                    <br />
                    We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website.
                </p>

                <p>
                    <b>Contact Us</b>
                    <br />
                    If you have any questions or concerns about this Privacy Policy, please contact us at info@HomeValueSpot.com.
                </p>
            </div>
        </div>    
    </>
  )
}
export default Privacy