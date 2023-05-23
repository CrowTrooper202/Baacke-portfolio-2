import React from 'react';

const styles = {
    headerStyle: {
      background: 'red',
    },
    headingStyle: {
      fontSize: '100px',
    },
  };

function Footer() {
    return(
        <footer style={styles.footerStyle} className="footer">
          <ul>
            <li>
                <a href='https://github.com/CrowTrooper202/'>GitHub</a>
                </li>
            <li>
                <a href ='www.linkedin.com/in/adam-baacke-1a3454253'>LinkedIn</a> 
                </li>
            <li>
                <a href='https://twitter.com/IGuard202'> InstaGram</a> 
                </li>
            </ul> 
        </footer>
    )
}

export default Footer;