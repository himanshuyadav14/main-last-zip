import Link from 'next/link';
import React from 'react';

const InsuranceContent = () => {
    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1200px',
            margin: 'auto',
            lineHeight: '1.6', // Increase line height for better readability
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                textAlign: 'center',
                borderBottom: '2px solid #333', // Add underline below heading
                paddingBottom: '10px', // Space between heading and content
                marginBottom: '20px' // Space below heading
            }}>
                WHAT DENTAL INSURANCES DO YOU ACCEPT?
            </h1>
            <p>
                We accept most Dental Insurances from major employers in the area. If you do not see your insurance in the list below or have specific questions in regards to your Dental Insurance please give us a call at <Link
                      className="underline-none"
                      href="tel:+1 (972) 972 4999"
                    >
                      +1 (972) 972 4999
                    </Link> or hit the chat button and our insurance specialist will be more than happy to help.
            </p>
            <p style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '20px', // Space above insurance list
                marginBottom: '30px' // Space below insurance list
            }}>
                {[
                    'Advantage Dental', 'Aetna', 'Ameritas', 'Anthem', 'BlueCross BlueShield', 'Cigna', 'Connection Dental',
                    'Delta Dental', 'Delta Premier', 'GEHA', 'Guardian', 'Metlife', 'Principal', 'Providence',
                    'United Concordia', 'UnitedHealthcare', 'Lincoln','Medicaid', 'CHIP', 'DentaQuest', 'MCNA'
                ].join(' | ')}
            </p>
            <h2 style={{
                fontSize: '2rem',
                borderBottom: '1px solid #ccc', // Divider line below subheading
                paddingBottom: '10px', // Space between subheading and content
                marginBottom: '15px' // Space below subheading
            }}>
                NO DENTAL INSURANCE NO PROBLEM
            </h2>
            <p>
                Smilebowl Family Dental wants all of our patients to receive the proper dental care they need and deserve. We offer patients flexible payment options via CareCredit and our Dental Savers Plan that will help make receiving the dental care you need affordable. Don’t let finances hinder your family’s oral health care needs by forgoing dental treatments and exams due to cost. Smilebowl Family Dental aims to help make your dental experience not only affordable, but we strive to work with our patients to ensure their oral health care needs are being met. Don’t let finances be an obstacle to receiving dental care; contact us today to find out more.
            </p>
            <h2 style={{
                fontSize: '2rem',
                borderBottom: '1px solid #ccc', // Divider line below subheading
                paddingBottom: '10px', // Space between subheading and content
                marginBottom: '15px' // Space below subheading
            }}>
                THE SMILECLOUD DENTAL SAVING PLAN 
            </h2>
            <p>
                You no longer have to put off your needed dental work because of cost. Great dentistry doesn’t have to be expensive. We can provide personalized, quality dental care in a comfortable environment, and we can do it at the right price. Start saving today!
            </p>
            <ul style={{
                listStyleType: 'disc', // Use bullets for list items
                marginLeft: '20px', // Indent list items for better readability
                marginBottom: '20px' // Space below the list
            }}>
                <li>Exclusive & unique in-house discount plan</li>
                <li>Saves you 30-50% off the average fees in Beaverton</li>
                <li>Great for the uninsured & retirees on a fixed income</li>
                <li>Pays for itself with a cleaning or one tooth-colored filling</li>
            </ul>
            <h2 style={{
                fontSize: '2rem',
                borderBottom: '1px solid #ccc', // Divider line below subheading
                paddingBottom: '10px', // Space between subheading and content
                marginBottom: '15px' // Space below subheading
            }}>
                ENROLL TODAY FOR ONLY
            </h2>
            <p>
                <b>$299/yr per individual</b><br />
                <b>$577/yr per family of 4</b>
            </p>
            <p style={{ marginBottom: '10px' }}>Call to learn more about our convenient in-house discount plan!</p>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                marginBottom: '30px' // Space below the table
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: '#f2f2f2' // Light gray background for table header row
                    }}>
                        <th style={{
                            padding: '10px',
                            borderBottom: '1px solid #ccc'
                        }}></th>
                        <th style={{
                            padding: '10px',
                            borderBottom: '1px solid #ccc'
                        }}>Us*</th>
                        <th style={{
                            padding: '10px',
                            borderBottom: '1px solid #ccc'
                        }}>Them**</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>Patient Exam</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$0</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$91</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>Full-Mouth X-Rays</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$0</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$129</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>Regular Cleaning</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$0</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$98</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>Tooth-Colored Filling</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$198</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$248</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>Tooth-Colored Crown</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$863</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>$1079</td>
                    </tr>
                </tbody>
            </table>
            <p style={{
                marginTop: '10px',
                fontSize: '0.9rem',
                textAlign: 'center' // Center align disclaimer text
            }}>
                *With enrollment in Dental Savings Plan.<br />
                **Based on approximate average fees in area.
            </p>
        </div>
    );
};

export default InsuranceContent;
