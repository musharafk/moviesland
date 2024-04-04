function Car(props) {
    // const {brand ,color} =props
    const {carinfo}=props;
    const {brand ,color} =carinfo
    const text=`hi i am a ${color} ${brand} car`;
    return (
      <h1>{text}</h1>
    )
  }
export   default Car;