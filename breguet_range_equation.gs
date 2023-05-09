function Breguet(landing_mass, range, tsfc, vel) {

    const g = 9.81 // gravitational constant
    const LD = 17 // lift drag ratio
    R = range*1000 // km to m
  
    const take_off_mass = landing_mass*Math.exp(R*g*tsfc/(vel*LD)) // Breguet range equation
    const fuel_consumption = (take_off_mass - landing_mass)*1000 // tons to kg
  
    return fuel_consumption;
}