import React from 'react'

const Map = async () => {
	const url = process.env.NEXT_PUBLIC_SERVER_URL;

	const options = {
	  method: "GET",
	  cache: 'no-store',
	  headers: {
		"Content-Type": "application/json",
	  },
	};
  
	const response = await fetch(`${url}/smile-dental/locations`, options);
	const mapData = await response.json();

  return (
    <>
    	  	{/* <!-- Iframe --> */}
				<section className="iframe_section section-lgb">
					<div className="container-fluid">
						<div className="iframe_box">
						<iframe src={mapData[0]?.tag} width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
						
					</div>
				</section>
			{/* <!-- Iframe End--> */}

    </>
  )
}

export default Map