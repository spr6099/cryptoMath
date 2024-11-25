function Banner() {
  return (
    <>
      <div style={{ position: 'relative', height: '100vh' }}>
        <div style={{ position: 'absolute' }}>
          <img
            src="/images/collage.jpg"
            width={"100%"}
            style={{ objectFit: "cover", objectPosition: 'top', height: '100vh' }}
          ></img>
        </div>
        <div style={{ width: '100%', height: '100vh', position: "absolute", zIndex: 10, display: 'grid', placeContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <h1 className="fs-1" style={{ color: '#ffffff', fontWeight: '800' }}>
            Welcome to the Next Generation
            <br /> of School Management
          </h1>
          {/* <div style={{ backgroundColor: "#2e2f31", }}>
            welcome
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Banner;
