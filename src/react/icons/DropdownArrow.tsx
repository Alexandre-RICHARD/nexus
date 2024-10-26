import React from "react";

type Props = {
  styles: React.CSSProperties;
};

export const DropdownArrow = ({ styles }: Props): React.JSX.Element => {
  return (
    <svg
      style={styles}
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <path d="M 48.28686,77.661551 C 47.590507,77.442175 41.820364,71.831222 24.060865,54.10393 5.246634,35.323818 0.66763947,30.621409 0.32758226,29.730982 0.04713635,28.996644 -0.05349327,28.142026 0.02666756,27.175392 0.11336868,26.129888 0.36078233,25.41476 0.90995788,24.622314 1.3992451,23.916282 2.1873349,23.256618 3.1075826,22.782807 c 1.1941107,-0.614816 1.659821,-0.717053 2.7764817,-0.609515 0.7379408,0.07107 1.7368825,0.322529 2.2198704,0.558807 0.4829876,0.236278 10.1257763,9.73608 21.4284223,21.110673 l 20.550265,20.681073 20.84379,-20.80326 c 20.10948,-20.070376 21.261847,-21.186791 22.450363,-21.42993 0.677554,-0.138609 0.971788,-0.213998 1.889817,-0.05058 0.544124,0.09686 1.385125,0.369222 1.81604,0.596095 0.430916,0.226874 1.316194,0.97085 1.70562,1.380716 0.389427,0.409864 0.808614,1.320232 1.029648,1.946721 0.22104,0.626487 0.178886,1.505208 0.178886,1.865491 0,0.360283 -0.136275,1.138783 -0.302842,1.730003 -0.262757,0.932716 -3.329514,4.109593 -23.178054,24.010361 -13.391568,13.426803 -23.288654,23.150261 -23.87244,23.45364 -0.54847,0.285023 -1.547412,0.565066 -2.219871,0.622318 -0.672462,0.05725 -1.633984,-0.02549 -2.136719,-0.183871 z" />
    </svg>
  );
};
