import React from "react";

type Props = {
  styles: React.CSSProperties;
};

export const Expand = ({ styles }: Props): React.JSX.Element => {
  return (
    <svg
      style={styles}
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <path d="M 2.0286519,99.828367 C 1.3411026,99.616827 0.41965985,98.704467 0.17793235,97.995887 0.02140405,97.537047 2.5275003e-4,96.186193 2.5275003e-4,86.64813 c 0,-12.183014 -0.038348,-11.606478 0.82966589997,-12.473449 0.87414915,-0.873101 2.00171455,-1.150975 3.05883395,-0.75381 0.8408367,0.315901 1.4003727,0.807801 1.7348004,1.525094 l 0.2641007,0.566451 0.00284,6.957225 c 0.00156,3.826477 0.043696,7.021514 0.093629,7.100079 0.062609,0.09851 2.5669284,-2.32864 8.0681683,-7.819537 8.724336,-8.707938 8.479303,-8.495253 9.78957,-8.497338 1.707747,-0.0027 3.005253,1.437923 2.90111,3.221139 -0.05936,1.016325 -0.172869,1.143024 -8.513503,9.502554 l -7.957332,7.975358 7.068017,0.05656 c 6.871464,0.05499 7.08219,0.06314 7.577695,0.293206 1.034918,0.480505 1.502593,1.054013 1.764096,2.163295 0.328095,1.39178 -0.527219,2.91257 -1.884262,3.35032 -0.530777,0.17122 -1.596414,0.188113 -11.417228,0.18096 -8.9992148,-0.007 -10.9197871,-0.0349 -11.3518021,-0.16787 z m 73.2025581,0.009 c -0.993506,-0.30986 -1.643139,-1.05519 -1.90668,-2.18756 -0.331122,-1.422722 0.374864,-2.727415 1.831022,-3.3838 0.408605,-0.184186 1.053328,-0.206324 7.514303,-0.258034 l 7.06735,-0.05656 -7.897872,-7.918797 c -4.34383,-4.35533 -8.012615,-8.096961 -8.152859,-8.314729 -1.044066,-1.621217 -0.168866,-3.814584 1.746135,-4.376073 0.780566,-0.228864 1.58903,-0.08948 2.363677,0.407508 0.288475,0.185077 4.036251,3.852548 8.328388,8.149932 4.292138,4.297383 7.818218,7.799113 7.835731,7.781617 0.01751,-0.01749 0.0434,-2.993207 0.05751,-6.612696 0.02619,-6.714544 0.06556,-7.576407 0.375885,-8.229589 0.432571,-0.910481 1.909164,-1.730852 2.880287,-1.600242 0.718498,0.09664 1.391528,0.429615 1.876538,0.928424 0.862315,0.886815 0.79959,-0.03004 0.83422,12.195169 0.03533,12.51873 0.09053,11.73437 -0.89512,12.71896 -0.98117,0.979983 -0.21071,0.923803 -12.5497,0.91517 -8.696793,-0.006 -10.9195,-0.0373 -11.308817,-0.15869 z M 2.2305131,26.64204 C 1.5363605,26.451442 0.98117725,26.075605 0.61003325,25.54504 -0.01294175,24.654473 0.01008895,25.123766 0.01155235,13.349867 0.01309035,0.97544228 -0.05827835,1.9127054 0.96064975,0.88566278 1.8873346,-0.04840202 1.1906906,0.00111528 13.414018,4.8008406e-4 25.409608,-1.4321594e-4 24.771597,-0.04025392 25.724507,0.77442138 27.146123,1.9898091 27.019031,4.3734263 25.478311,5.3918003 c -0.864107,0.5711515 -1.221338,0.5965225 -8.460473,0.6008694 -3.690919,0.00221 -6.710761,0.028255 -6.710761,0.057863 0,0.029609 3.580488,3.6468365 7.956641,8.0382823 4.404047,4.419439 8.05279,8.170937 8.171985,8.402119 0.340029,0.659507 0.373364,1.776379 0.07378,2.471944 -0.456848,1.060693 -1.50951,1.782647 -2.608277,1.788848 -1.383043,0.0078 -0.97446,0.359576 -9.805861,-8.44237 -4.4261739,-4.411411 -8.0831136,-7.985266 -8.1265336,-7.941898 -0.04342,0.04337 -0.080064,3.239298 -0.081432,7.102069 -0.00232,6.552554 -0.016328,7.053541 -0.2090111,7.475719 -0.435035,0.953181 -1.0106798,1.420481 -2.1103688,1.713165 -0.6624674,0.176316 -0.634477,0.176658 -1.3374864,-0.01637 z m 73.0888379,0.0023 c -0.968148,-0.312329 -1.760531,-1.187236 -2.020022,-2.230396 -0.161864,-0.650704 -0.0033,-1.529886 0.383296,-2.124774 0.142362,-0.21908 3.812878,-3.961785 8.156713,-8.317122 L 89.73721,6.0532641 82.726489,5.992341 C 75.217479,5.9270883 75.280079,5.9321119 74.444772,5.3277445 73.339015,4.5277018 72.969334,3.0564932 73.524833,1.6666871 73.710132,1.2030874 74.635575,0.42554328 75.272346,0.19845178 75.788292,0.01445088 76.615166,-3.671594e-5 86.571468,4.8188406e-4 98.821585,0.00111988 98.114355,-0.05041112 99.077655,0.91172498 100.07599,1.9088615 100.01916,1.1110641 99.984315,13.638958 l -0.0305,10.975823 -0.39283,0.647327 c -0.45745,0.753818 -0.99579,1.147217 -1.88728,1.379139 -1.371192,0.356723 -2.727074,-0.348791 -3.368131,-1.752562 -0.224933,-0.492557 -0.233679,-0.73285 -0.269704,-7.40973 -0.02047,-3.795366 -0.04796,-6.96817 -0.06108,-7.050675 -0.01312,-0.0825 -3.617084,3.436212 -8.008811,7.81937 -6.128301,6.116349 -8.107018,8.026259 -8.509915,8.214001 -0.686778,0.320028 -1.496416,0.389258 -2.136693,0.182701 z" />
      <rect
        width="35.130001"
        height="35.130001"
        x="32.627899"
        y="32.619743"
      />
    </svg>
  );
};
