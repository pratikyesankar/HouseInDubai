
// ------
const HouseInDubai = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center me-auto">
          <a className="navbar-brand fw-bold text-white text-uppercase me-4" href="#">HOUSEARCH</a>
          <span className="d-none d-lg-inline me-3 text-white">Country</span>
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="countryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://placehold.co/20x15/000/FFF?text=UAE" alt="UAE Flag" className="me-2 rounded" />
              UAE
            </button>
            <ul className="dropdown-menu" aria-labelledby="countryDropdown">
             <li><a className="dropdown-item" href="#">UAE</a></li>
              <li><a className="dropdown-item" href="#">Turkey</a></li>
               <li><a className="dropdown-item" href="#">Thailand</a></li>
                <li><a className="dropdown-item" href="#">Indonesia</a></li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <a href="#" className="me-3 text-white text-decoration-none d-none d-lg-inline">For Business</a>

          <div className="dropdown me-3">
            <button className="btn btn-light dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-globe me-1"></i> English
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
               <li><a className="dropdown-item" href="#">Espanol</a></li>
              <li><a className="dropdown-item" href="#">Francais</a></li>
              <li><a className="dropdown-item" href="#">Deutsch</a></li>
               <li><a className="dropdown-item" href="#">Pyccknn</a></li>
                <li><a className="dropdown-item" href="#">Turkce</a></li>
            </ul>
          </div>

            <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="settingsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-gear me-1"></i> Settings
            </button>
            <ul className="dropdown-menu dropdown-menu-end p-3" style={{ minWidth: "300px" }} aria-labelledby="settingsDropdown">
              <li><h6 className="dropdown-header">Currency</h6></li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="currency" id="aed" value="AED" />
                  <label className="form-check-label" htmlFor="aed">AED</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="currency" id="eur" value="EUR" />
                  <label className="form-check-label" htmlFor="eur">EUR</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="currency" id="usd" value="USD" defaultChecked />
                  <label className="form-check-label" htmlFor="usd">USD</label>
                </div>
              </li>
              <li>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="currency" id="rub" value="RUB" />
                  <label className="form-check-label" htmlFor="rub">RUB</label>
                </div>
              </li>

              <li><h6 className="dropdown-header">Units</h6></li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="units" id="sqm" value="Square meters" defaultChecked />
                  <label className="form-check-label" htmlFor="sqm">Square meters</label>
                </div>
              </li>
              <li>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="radio" name="units" id="sqft" value="Square feet" />
                  <label className="form-check-label" htmlFor="sqft">Square feet</label>
                </div>
              </li>

              <li>
                <button className="btn btn-dark w-100" disabled>Save settings</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ------
const Breadcrumb = () => {
  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light p-3 rounded">
          <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-muted">Find properties</a></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">UAE</li>
        </ol>
      </nav>
    </div>
  );
};

// ------
const HeroSection = () => {
  return (
    <section className="container my-5">
    <h1 className="mb-4" style={{ lineHeight: 1.2 }}>
  <span style={{
    fontFamily: "'Anton', sans-serif",
    color: "#c6a987",
    fontSize: "120px",
    fontWeight: "900",
    textTransform: "uppercase"
  }}>
    Buy or Rent
  </span>
  <br />
  <span style={{
    fontFamily: "'Anton', sans-serif",
    color: "#000",
     fontSize: "120px",
    fontWeight: "100",
    textTransform: "uppercase"
  }}>
    Apartments in the UAE
  </span>
</h1>

      <div className="card shadow-sm p-4 mb-5 rounded-4">
        <div className="row g-3 align-items-center">
          <div className="col-lg-3 col-md-6">
            <div className="input-group rounded-pill border">
              <span className="input-group-text bg-transparent border-0 px-3 py-2">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control border-0 rounded-end-pill ps-0" placeholder="Region, district, or project" />
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <select className="form-select rounded-pill border py-2">
              <option selected>Bedrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3+</option>
            </select>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="input-group rounded-pill border">
              <input type="text" className="form-control border-0 rounded-start-pill pe-0" placeholder="Price, USD" />
              <span className="input-group-text bg-transparent border-0 px-3 py-2">
                <i className="bi bi-currency-dollar"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <button className="btn btn-outline-secondary dropdown-toggle w-100 rounded-pill py-2" type="button" id="moreFiltersDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              More filters
            </button>
            <ul className="dropdown-menu" aria-labelledby="moreFiltersDropdown">
              <li><a className="dropdown-item" href="#">Filter 1</a></li>
              <li><a className="dropdown-item" href="#">Filter 2</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-12">
            <button className="btn btn-dark w-100 rounded-pill py-2">920 offers</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ------
const CityCard = ({ imageUrl, cityName, startingPrice, newBuildings }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
        <img src={imageUrl} className="card-img-top object-cover" alt={cityName} style={{ height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title fw-bold mb-2">{cityName}</h5>
          {startingPrice && <p className="card-text text-muted mb-0">starting at {startingPrice}</p>}
          {newBuildings && <p className="card-text text-muted">{newBuildings} new buildings</p>}
        </div>
      </div>
    </div>
  );
};

// ------
const CitiesSection = () => {
  const cities = [
    { name: "Dubai", image: "https://images.pexels.com/photos/16563223/pexels-photo-16563223.jpeg", startingPrice: "$90K", newBuildings: 807 },
    { name: "Abu Dhabi", image: "https://images.pexels.com/photos/25309271/pexels-photo-25309271.jpeg", startingPrice: "$99K", newBuildings: 53 },
    { name: "Emirate of Ras Al K...", image: "https://images.pexels.com/photos/17034947/pexels-photo-17034947.jpeg", startingPrice: "$130K", newBuildings: 35 },
    { name: "Emirate of Sharjah", image: "https://images.pexels.com/photos/7703869/pexels-photo-7703869.jpeg", startingPrice: "$102K", newBuildings: 21 },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Cities in the UAE</h2>
        <div>
          <button className="btn btn-outline-secondary me-2 rounded-circle"><i className="bi bi-arrow-left"></i></button>
          <button className="btn btn-outline-secondary rounded-circle"><i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
      <div className="row">
        {cities.map((city, index) => (
          <CityCard
            key={index}
            imageUrl={city.image}
            cityName={city.name}
            startingPrice={city.startingPrice}
            newBuildings={city.newBuildings}
          />
        ))}
      </div>
    </section>
  );
};

// ------
const PropertyAdvantagesSection = () => {
  const advantages = [
    { value: "5%", description: "Down payment" },
    { value: "0%", description: "Installments from the developer" },
    { value: "$102K", description: "Minimum apartment price" },
  ];

  return (
    <section className="container my-5 py-4">
      <h2 className="fw-bold mb-5 text-center text-md-start">What makes property in the UAE such a great deal?</h2>
      <div className="row text-center">
        {advantages.map((advantage, index) => (
          <div key={index} className="col-md-3 mb-4" >
            <div className="p-4 rounded-3">
              <h1 className="display-4 fw-bold mb-2" style={{ color: '#c6a987', height: '200px',  fontSize: "120px",
    fontWeight: "900", }}>{advantage.value}</h1>
              <p className="lead text-muted">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ------

 const GuideCard = ({ title, description, downloadSize }) => {
  const splitTitle = title.split(" ");
  const firstWord = splitTitle[0];
  const restTitle = splitTitle.slice(1).join(" ");

  const isAllBlack = title === "CHECKLIST";

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className="card h-100 border-0 shadow-sm rounded-4 text-center px-4 py-5"
        style={{ backgroundColor: '#f3ede5' }}
      >
        <div className="card-body d-flex flex-column justify-content-between p-0">
          <div>
            <h5
              className="mb-3"
              style={{
                fontSize: '60px',
                fontWeight: 100,
                textTransform: 'uppercase',
                fontFamily: "'Anton', sans-serif"
              }}
            >
              {isAllBlack ? (
                <span style={{ color: '#000' }}>{title}</span>
              ) : (
                <>
                  <span style={{ color: '#c6a987' }}>{firstWord}</span>{' '}
                  <span style={{ color: '#000' }}>{restTitle}</span>
                </>
              )}
            </h5>
            <p
              className="text-dark"
              style={{
                fontSize: '15px',
                fontFamily: "'League Spartan', sans-serif",
                lineHeight: 1.5
              }}
            >
              {description}
            </p>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="btn border rounded-pill px-4 py-2 fw-medium"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: "'League Spartan', sans-serif",
                backgroundColor: '#f5f5f5',
                color: '#000'
              }}
            >
              Download PDF, {downloadSize}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const GuidesSection = () => {
  const guides = [
    {
      title: 'GOLDEN VISA',
      description: 'Instructions for how to stay in the UAE long-term',
      downloadSize: '1MB'
    },
    {
      title: 'CHECKLIST',
      description: 'Everything you need to know before buying property in the UAE',
      downloadSize: '903kB'
    },
    {
      title: "BUYER'S GUIDE",
      description: 'Everything you should know about finding and buying a place to live in Dubai',
      downloadSize: '4MB'
    }
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Guides for the UAE</h2>
        <div>
          <button className="btn btn-outline-secondary me-2 rounded-circle">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-secondary rounded-circle">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="row">
        {guides.map((guide, index) => (
          <GuideCard
            key={index}
            title={guide.title}
            description={guide.description}
            downloadSize={guide.downloadSize}
          />
        ))}
      </div>
    </section>
  );
};


// ------
const BuildingCard = ({ imageUrl, buildingName, startingPrice }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
        <img src={imageUrl} className="card-img-top object-cover" alt={buildingName} style={{ height: '200px' }} />
        <div className="card-body">
          <p className="card-text text-muted mb-0">starting at {startingPrice}</p>
          <h5 className="card-title fw-bold mt-1">{buildingName}</h5>
        </div>
      </div>
    </div>
  );
};

// ------
const PopularBuildingsSection = () => {
  const buildings = [
    { name: "DAMAC Islands", image: "https://images.pexels.com/photos/8319454/pexels-photo-8319454.jpeg", startingPrice: "$613K" },
    { name: "Damac Riverside", image: "https://images.pexels.com/photos/13424967/pexels-photo-13424967.jpeg", startingPrice: "$542K" },
    { name: "Sobha One", image: "https://images.pexels.com/photos/31701158/pexels-photo-31701158.jpeg", startingPrice: "$2M" },
    { name: "Parkside Hills", image: "https://images.pexels.com/photos/14750222/pexels-photo-14750222.jpeg", startingPrice: "$1M" },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Popular buildings</h2>
        <div>
          <button className="btn btn-outline-secondary me-2 rounded-circle"><i className="bi bi-arrow-left"></i></button>
          <button className="btn btn-outline-secondary rounded-circle"><i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
       <div className="row">
        {buildings.map((building, index) => (
          <BuildingCard
            key={index}
            imageUrl={building.image}
            buildingName={building.name}
            startingPrice={building.startingPrice}
          />
        ))}
      </div>
    </section>
  );
};

// ------
const NewBuildingsSection = () => {
  const newBuildings = [
    { name: "The Bay Residence", image: "https://images.pexels.com/photos/14750357/pexels-photo-14750357.jpeg", startingPrice: "$142K" },
    { name: "Blue Bay Walk", image: "https://images.pexels.com/photos/14749905/pexels-photo-14749905.jpeg", startingPrice: "$102K" },
    { name: "South Bay", image: "https://images.pexels.com/photos/6840005/pexels-photo-6840005.jpeg", startingPrice: "$145K" },
    { name: "The Bay Residences Central I", image: "https://images.pexels.com/photos/16116487/pexels-photo-16116487.jpeg", startingPrice: "$130K" },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">New buildings up to $150K</h2>
        <div>
          <button className="btn btn-outline-secondary me-2 rounded-circle"><i className="bi bi-arrow-left"></i></button>
          <button className="btn btn-outline-secondary rounded-circle"><i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
      <div className="row">
        {newBuildings.map((building, index) => (
          <BuildingCard
            key={index}
            imageUrl={building.image}
            buildingName={building.name}
            startingPrice={building.startingPrice}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline-dark rounded-pill px-4 py-2">Show all</button>
      </div>
    </section>
  );
};

// ------
 const FreePropertiesCTA = () => {
  return (
    <section
      className="container my-5 py-5 px-4 rounded-4 text-center"
      style={{ backgroundColor: "#F0E7DE" }}
    >
      <h2
        className="mb-3"
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "60px",
          fontWeight: 100,
          color: "#000",
        }}
      >
        WE'LL FIND YOU PROPERTIES{" "}
        <span style={{ color: "#c6a987" }}>FOR FREE</span>
      </h2>

      <p
        className="mb-4"
        style={{
          fontFamily: "'League Spartan', sans-serif",
          fontSize: "16px",
          color: "#888",
        }}
      >
        Fit your budget, get help in English, save time searching on your own
      </p>

      <div className="row justify-content-center mb-3">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div
            className="d-flex rounded-3"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              overflow: "hidden",
              height: "50px",
            }}
          >
            <input
              type="tel"
              className="form-control border-0 rounded-0"
              placeholder="Phone number"
              style={{
                fontSize: "25px",
             
                paddingLeft: "20px",
                paddingRight: "20px",
                flex: 1,
              }}
            />
            <button
              className="btn btn-dark rounded-0"
              style={{
                fontSize: "25px",
           
                padding: "0 30px",
                height: "100%",
                borderLeft: "1px solid #ccc",
              }}
            >
              Get started
            </button>
          </div>

          <div className="form-check mt-3 text-start d-flex align-items-start justify-content-center">
            <input
              className="form-check-input me-2 mt-1"
              type="checkbox"
              value=""
              id="consentCheck"
              defaultChecked
            />
            <label
              className="form-check-label text-muted small"
              htmlFor="consentCheck"
              style={{ fontSize: "8.5px", maxWidth: "500px" }}
            >
              I give Housearch IT LLC (UAE, Dubai, Saif Shuaib 2, block J P176) consent to
              processing of my personal data for sending me marketing communications. I am
              aware of the right to withdraw this consent at any time.
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};



// ------
 const DeveloperCard = ({ logoUrl, fullName, newBuildingsCount }) => {
  return (
    <div
      className="text-center rounded-4 px-4 py-3 mx-2"
      style={{
        backgroundColor: "#f4f2ef",
        width: "200px",
        minWidth: "200px",
        flexShrink: 0,
      }}
    >
      <img
        src={logoUrl}
        alt={fullName}
        className="img-fluid mb-3"
        style={{ maxHeight: "190px", objectFit: "contain" }}
      />
      <div className="fw-semibold" style={{ fontSize: "14px" }}>
        {fullName}
      </div>
      <div className="text-muted" style={{ fontSize: "13px" }}>
        {newBuildingsCount} new buildings
      </div>
    </div>
  );
};

const DevelopersSection = () => {
  const developers = [
    {
      name: "EMAAR",
      fullName: "Emaar Properties",
      newBuildings: 137,
      logo: "https://placehold.co/100x60?text=EMAAR",
    },
    {
      name: "DAMAC",
      fullName: "DAMAC",
      newBuildings: 99,
      logo: "https://placehold.co/100x60?text=DAMAC",
    },
    {
      name: "ELLINGTON",
      fullName: "Ellington Properties",
      newBuildings: 50,
      logo: "https://placehold.co/100x60?text=ELLINGTON",
    },
    {
      name: "BINGHATTI",
      fullName: "Binghatti Developers",
      newBuildings: 34,
      logo: "https://placehold.co/100x60?text=BINGHATTI",
    },
    {
      name: "AZIZI",
      fullName: "Azizi Developments",
      newBuildings: 29,
      logo: "https://placehold.co/100x60?text=AZIZI",
    },
    {
      name: "SOBHA",
      fullName: "Sobha Realty",
      newBuildings: 27,
      logo: "https://placehold.co/100x60?text=SOBHA",
    },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Developers</h2>
        <div>
          <button className="btn btn-outline-secondary me-2 rounded-circle">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-secondary rounded-circle">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div
        className="d-flex overflow-auto pb-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {developers.map((dev, index) => (
          <DeveloperCard
            key={index}
            logoUrl={dev.logo}
            fullName={dev.fullName}
            newBuildingsCount={dev.newBuildings}
          />
        ))}
      </div>
    </section>
  );
};

// ------


// ------
const NewBuildingsWithPoolSection = () => {
  const buildings = [
    { name: "DAMAC Islands", image: "https://images.pexels.com/photos/32558283/pexels-photo-32558283.jpeg", startingPrice: "$613K" },
    { name: "Damac Riverside", image: "https://images.pexels.com/photos/10513876/pexels-photo-10513876.jpeg", startingPrice: "$542K" },
    { name: "Sobha One", image: "https://images.pexels.com/photos/10514386/pexels-photo-10514386.jpeg", startingPrice: "$2M" },
    { name: "Parkside Hills", image: "https://images.pexels.com/photos/29763202/pexels-photo-29763202.jpeg", startingPrice: "$1M" },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">New buildings with a pool</h2>
        <div>
          <button className="btn btn-outline-secondary me-2 rounded-circle"><i className="bi bi-arrow-left"></i></button>
          <button className="btn btn-outline-secondary rounded-circle"><i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
      <div className="row">
        {buildings.map((building, index) => (
          <BuildingCard
            key={index}
            imageUrl={building.image}
            buildingName={building.name}
            startingPrice={building.startingPrice}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline-dark rounded-pill px-4 py-2">Show all</button>
      </div>
    </section>
  );
};

// ------
const NewBuildingsWithFitnessCenterSection = () => {
  const buildings = [
    { name: "DAMAC Islands", image: "https://images.pexels.com/photos/27277164/pexels-photo-27277164.jpeg", startingPrice: "$613K" },
    { name: "Sobha One", image: "https://images.pexels.com/photos/27503976/pexels-photo-27503976.jpeg", startingPrice: "$2M" },
    { name: "Parkside Hills", image: "https://images.pexels.com/photos/29470795/pexels-photo-29470795.jpeg", startingPrice: "$1M" },
    { name: "Central Park At City Walk", image: "https://images.pexels.com/photos/4612749/pexels-photo-4612749.jpeg", startingPrice: "$498K" },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">New buildings with a fitness center</h2>
        <div>
          <button className="btn btn-outline-secondary me-2 rounded-circle"><i className="bi bi-arrow-left"></i></button>
          <button className="btn btn-outline-secondary rounded-circle"><i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
      <div className="row">
        {buildings.map((building, index) => (
          <BuildingCard
            key={index}
            imageUrl={building.image}
            buildingName={building.name}
            startingPrice={building.startingPrice}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline-dark rounded-pill px-4 py-2">Show all</button>
      </div>
    </section>
  );
};

// ------
const CountryPropertyCard = ({ countryName, flagUrl, startingPrice, downPayment, installments, offersCount }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm rounded-4 text-start p-4" style={{ backgroundColor: "#f4f2ef" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title fw-bold mb-0">{countryName}</h5>
          <img src={flagUrl} alt={`${countryName} Flag`} style={{ width: '40px', height: 'auto', objectFit: 'contain' }} />
        </div>
        <p className="card-text text-muted mb-1">— starting at {startingPrice}</p>
        {downPayment && <p className="card-text text-muted mb-1">— {downPayment} down</p>}
        {installments && <p className="card-text text-muted mb-3">— {installments} in installments</p>}
        <div className="bg-white rounded-pill text-center fw-semibold py-2" style={{ fontSize: '15px' }}>
          {offersCount} offers
        </div>
      </div>
    </div>
  );
};

const OtherCountriesSection = () => {
  const countries = [
    {
      name: "Turkey",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png",
      startingPrice: "$59K",
      downPayment: "25%",
      installments: "0%",
      offers: 1077,
    },
    {
      name: "Indonesia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1200px-Flag_of_Indonesia.svg.png",
      startingPrice: "$73K",
      downPayment: null,
      installments: null,
      offers: 259,
    },
    {
      name: "Thailand",
      flag: "https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg",
      startingPrice: "$66K",
      downPayment: "10%",
      installments: "0%",
      offers: 574,
    },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Real estate in other countries</h2>
        <div>
          <button className="btn btn-outline-secondary me-2 rounded-circle">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-outline-secondary rounded-circle">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="row">
        {countries.map((country, index) => (
          <CountryPropertyCard
            key={index}
            countryName={country.name}
            flagUrl={country.flag}
            startingPrice={country.startingPrice}
            downPayment={country.downPayment}
            installments={country.installments}
            offersCount={country.offers}
          />
        ))}
      </div>
    </section>
  );
};


// ------
const BlogCategoryButton = ({ categoryName, isActive }) => {
  return (
    <button className={`btn ${isActive ? 'btn-dark' : 'btn-outline-secondary'} rounded-pill me-2 mb-2`}>
      {categoryName}
    </button>
  );
};

// ------
const BlogPostCard = ({ imageUrl, title }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
        <img src={imageUrl} className="card-img-top object-cover" alt={title} style={{ height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
        </div>
      </div>
    </div>
  );
};

// ------
const BlogSection = () => {
  const categories = ["Relocation", "Trendscape", "Luxury", "Lifestyle", "Strategy"];

  const blogPosts = [
      {
      title: "CAN FOREIGN NATIONALS GET PERMANENT RESIDENCY IN DUBAI?",
      image: "https://images.pexels.com/photos/32102347/pexels-photo-32102347.jpeg",
    },
  {
    title: "Residence Visa Renewal in Abu Dhabi",
    image: "https://images.pexels.com/photos/1717301/pexels-photo-1717301.jpeg", // or use your actual image
  },
  {
    title: "How to Move to Dubai from the UK",
    image: "https://images.pexels.com/photos/8471779/pexels-photo-8471779.jpeg", // London image
  },
  {
    title: "Moving to Downtown Dubai? Here’s What to Expect",
    image: "https://images.pexels.com/photos/28350357/pexels-photo-28350357.jpeg", // Downtown Dubai
  },
  {
    title: "What It’s Like to Move From London to Dubai: A Personal Story",
    image: "https://images.pexels.com/photos/28350367/pexels-photo-28350367.jpeg", // Burj Khalifa pool view
  },
];


  return (
    <section className="container my-5">
      <h2 className="fw-bold mb-4">Blog</h2>

      <div className="d-flex flex-wrap mb-4">
        {categories.map((category, index) => (
          <BlogCategoryButton key={index} categoryName={category} isActive={index === 0} />
        ))}
      </div>

      <div className="position-relative mb-5 rounded-4 overflow-hidden shadow-sm">
        <img
          src={blogPosts[0].image}
          alt={blogPosts[0].title}
          className="w-100 img-fluid object-cover"
          style={{ height: '450px', objectFit: 'cover' }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
          }}
        >
          <h3
            className="text-white fw-bold mb-3"
            style={{
              fontSize: '2rem',
              fontFamily: `'Anton', sans-serif`,
              lineHeight: 1.2,
            }}
          >
            {blogPosts[0].title}
          </h3>
        </div>
      </div>

      <div className="row">
        {blogPosts.slice(1).map((post, index) => (
          <BlogPostCard key={index} imageUrl={post.image} title={post.title} />
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-dark rounded-pill px-4 py-2">Show all articles</button>
      </div>
    </section>
  );
};

// ----------
const NewsletterSection = () => {
  return (
    <section
      className="container my-5 py-5 px-3 rounded-4"
      style={{ backgroundColor: '#f0e7de' }}
    >
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          
          <h2
            className="fw-bold mb-4 text-uppercase"
            style={{
              fontSize: '5rem',
              lineHeight: '1.1',
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >
            <span className="text-dark d-block">HOW TO INVEST</span>
            <span style={{ color: '#c6a987' }}>IN PROPERTY</span>
          </h2>

        
          <div className="d-flex justify-content-center mb-3 flex-wrap gap-2">
            <input
              type="email"
              placeholder="email"
              className="form-control"
              style={{
                maxWidth: '520px',
                height: '48px',
                borderRadius: '8px',
                padding: '0 16px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            />
            <button
              className="btn"
              type="button"
              style={{
                maxWidth: '400px',
                backgroundColor: '#000',
                color: '#fff',
                height: '48px',
                borderRadius: '8px',
                padding: '0 24px',
                fontWeight: '500',
              }}
            >
              Subscribe
            </button>
          </div>

         
          <div className="form-check d-flex align-items-start justify-content-center">
            <input
              className="form-check-input me-2 mt-1"
              type="checkbox"
              value=""
              id="newsletterConsent"
              defaultChecked
            />
            <label
              className="form-check-label text-muted small"
              htmlFor="newsletterConsent"
              style={{ maxWidth: '700px',  fontSize: '0.6rem',textAlign: 'left' }}
            >
              I consent to have my personal information processed by Housearch IT
              LLC (UAE, Dubai, Saif Shuaib 2, block J P176) in order to send me
              marketing messages. I'm aware that I can withdraw my consent at any
              time.
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

// ------
const PopularQueryCard = ({ title, queries }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="h-100 p-4">
        <h5 className="fw-bold mb-3">{title}</h5>
        <ul className="list-unstyled">
          {queries.map((query, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="text-decoration-none" style={{ color: '#A59484' }}>{query}</a>
            </li>
          ))}
        </ul>
        <div className="mt-auto text-start">
          <a href="#" className="text-decoration-none" style={{ color: '#A59484' }}>Show more <i className="bi bi-chevron-down"></i></a>
        </div>
      </div>
    </div>
  );
};

// ------
const PopularQueriesSection = () => {
  const apartmentQueries = [
    { title: "Dubai", queries: ["Apartments for sale in Jumeirah Village Circle, Dubai, UAE"] },
    { title: "Abu Dhabi", queries: ["Apartments for sale - Saadiyat Island, Abu-dhabi, UAE"] },
    { title: "Other emirates", queries: ["Apartments for sale-Ras-al-khaimah, UAE"] },
  ];

  const houseQueries = [
    { title: "Dubai", queries: ["Houses for sale Dubailand, Dubai, UAE"] },
    { title: "Abu Dhabi", queries: ["Houses in Yas Island, Abu-dhabi, UAE"] },
    { title: "Other emirates", queries: ["Houses-Ras-al-khaimah, UAE"] },
  ];

  return (
    <section className="container my-5">
      <h2 className="fw-bold mb-4">Popular queries</h2>

      <h3 className="fw-bold mb-3">Apartments</h3>
      <div className="row">
        {apartmentQueries.map((category, index) => (
          <PopularQueryCard key={`apt-${index}`} title={category.title} queries={category.queries} />
        ))}
      </div>

      <h3 className="fw-bold mb-3 mt-5">Houses</h3>
      <div className="row">
        {houseQueries.map((category, index) => (
          <PopularQueryCard key={`house-${index}`} title={category.title} queries={category.queries} />
        ))}
      </div>
    </section>
  );
};

// ------
const SitemapColumn = ({ title, links }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <h5 className="fw-bold mb-3">{title}</h5>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href="#" className="text-decoration-none text-light" style={{ fontSize: '0.9rem' }}>{link.text}</a>
            {link.hasMore && <a href="#" className="text-decoration-none text-light ms-2" style={{ fontSize: '0.8rem' }}>Show more <i className="bi bi-chevron-down"></i></a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ------
const Footer = () => {
  const sitemapData = [
    {
      title: "Types of properties",
      links: [
        { text: "Apartments UAE" },
        { text: "Duplexes-UAE" },
        { text: "Townhouses in UAE" },
        { text: "Villas UAE" },
        { text: "Houses-UAE" },
        { text: "More", hasMore: true },
      ],
    },
    {
      title: "Bedrooms",
      links: [
        { text: "Residential complexes with 1 bedroom-UAE" },
        { text: "Two bedrooms in UAE" },
        { text: "Residential complexes with 3 bedrooms in UAE" },
        { text: "Four and more bedrooms for sale in UAE" },
        { text: "Studio for sale in UAE" },
      ],
    },
    {
      title: "Popular cities",
      links: [
        { text: "Real estate-Dubai" },
        { text: "Residential complexes Abu Dhabi , UAE" },
        { text: "New projects in Ras al-Khaimah , UAE" },
        { text: "New projects Sharjah" },
        { text: "Real estate in Ajman" },
      ],
    },
    {
      title: "Popular districts",
      links: [
        { text: "New projects Dubailand , Dubai , UAE" },
        { text: "New buildings in Jumeirah Village Circle , Dubai" },
        { text: "Real estate in Business Bay , Dubai" },
        { text: "New buildings MBR City , Dubai" },
        { text: "Residential complexes in Dubai Hills Estate , Dubai" },
        { text: "More", hasMore: true },
      ],
    },
    {
      title: "Properties for rent",
      links: [
        { text: "1 bedroom for rent-UAE" },
        { text: "2 bedrooms-LUAE" },
        { text: "Three bedrooms for rent in UAE" },
        { text: "Four and more bedrooms for rent - UAE" },
        { text: "Studio for rent in UAE" },
        { text: "More", hasMore: true },
      ],
    },
    {
      title: "Properties for sale by district",
      links: [
        { text: "Buy properties-Dubailand , Dubai , UAE" },
        { text: "Property in Downtown Dubai , Dubai , UAE" },
        { text: "Buy property Business Bay , Dubai" },
        { text: "Properties in MBR City , Dubai" },
        { text: "Buy property in Jumeirah Village Circle , Dubai, UAE" },
        { text: "More", hasMore: true },
      ],
    },
    {
      title: "Properties for rent by district",
      links: [
        { text: "Rent properties-Downtown Dubai , Dubai, UAE" },
        { text: "Rent properties-Dubailand , Dubai" },
        { text: "Rent property-MBR City , Dubai" },
        { text: "Properties Dubai Creek Harbour , Dubai" },
        { text: "Rent property Dubai Marina , Dubai , UAE" },
        { text: "More", hasMore: true },
      ],
    },
    {
      title: "Popular cities",  
      links: [
        { text: "Property-Dubai , UAE" },
        { text: "Property-Dubai , UAE" },  
        { text: "Property in Ras al-Khaimah , UAE" },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-light pt-5 pb-3" style={{ backgroundColor: '#2c2c2c !important' }}>
      <div className="container">
        <div className="row">
          {sitemapData.map((column, index) => (
            <SitemapColumn key={index} title={column.title} links={column.links} />
          ))}
        </div>
        <hr className="bg-light my-4" />
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-1" style={{ fontSize: '0.9rem' }}>&copy; 2025 HOUSEARCH</p>
            <p className="mb-0" style={{ fontSize: '0.8rem' }}>Address : UAE , Dubai , Saih Shuaib 2 , BLOCK JP176 COMMERCIAL , office No . J-00</p>
            <p className="mb-0" style={{ fontSize: '0.8rem' }}>Follow <a href="#" className="text-light text-decoration-none">Facebook</a></p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3"><a href="#" className="text-light text-decoration-none" style={{ fontSize: '0.9rem' }}>User Agreement</a></li>
              <li className="list-inline-item me-3"><a href="#" className="text-light text-decoration-none" style={{ fontSize: '0.9rem' }}>Privacy Policy</a></li>
              <li className="list-inline-item me-3"><a href="#" className="text-light text-decoration-none" style={{ fontSize: '0.9rem' }}>Ask a question</a></li>
              <li className="list-inline-item"><a href="#" className="text-light text-decoration-none" style={{ fontSize: '0.9rem' }}>Leave a complaint</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


// ------
const App = () => {
  return (
    <div>
    
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      <HouseInDubai />
      <Breadcrumb />
      <HeroSection />
      <CitiesSection />
      <PropertyAdvantagesSection />
      <GuidesSection />
      <PopularBuildingsSection />
      <NewBuildingsSection />
      <FreePropertiesCTA />
      <DevelopersSection />
      <NewBuildingsWithPoolSection />
      <NewBuildingsWithFitnessCenterSection />
      <OtherCountriesSection />
      <BlogSection />
      <NewsletterSection />
      <PopularQueriesSection />
      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </div>
  );
};

export default App;
