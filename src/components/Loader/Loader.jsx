import { Dna, RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />
  );
};

export const RotatingLoader = () => {
  return (
    <RotatingLines
    strokeColor="white"
    strokeWidth="5"
    animationDuration="0.75"
    width="25"
    visible={true}
  />
  );
};