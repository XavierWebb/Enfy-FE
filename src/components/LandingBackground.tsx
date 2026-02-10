import styled, { css, keyframes } from "styled-components";
import type Keyframes from "styled-components/dist/models/Keyframes";

const floatOne = keyframes`
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(3rem, -2rem) scale(1.15); }
  75% { transform: translate(7rem, 3rem) scale(1.3); }
  100% { transform: translate(0,0) scale(1); }
`;

const floatTwo = keyframes`
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(-3rem, 2rem) scale(1.1); }
  75% { transform: translate(-6rem, -3rem) scale(1.25); }
  100% { transform: translate(0,0) scale(1); }
`;

const floatThree = keyframes`
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(2rem, 3rem) scale(1.2); }
  75% { transform: translate(-4rem, 5rem) scale(1.35); }
  100% { transform: translate(0,0) scale(1); }
`;

const floatFour = keyframes`
    0% { transform: translate(0,0) scale(1);}
    50% { transform: translate(3rem, -2rem) scale(1.15);}
    75% { transform: translate(7rem, 3rem) scale(1.3);}
    100% { transform: translate(0,0) scale(1);}
`

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: #0f1815;
`;

const Blob = styled.div<{$float: Keyframes,duration: number}>`
  position: absolute;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.7;
  ${({$float, duration}) => css`
    animation: ${$float} ${duration}s ease-in-out infinite;
  `}
`;

const GreenBlob = styled(Blob)`
  background: radial-gradient(
    circle,
    rgba(0, 140, 110, 0.9),
    rgba(0, 60, 50, 0.4)
  );
  top: -200px;
  left: -150px;
`;

const GreenBlob2 = styled(Blob)`
  background: radial-gradient(
    circle,
    rgba(0, 140, 110, 0.9),
    rgba(0, 60, 50, 0.4)
  );
  top: 25rem;
  left: 30rem;
`

const DarkGreenBlob = styled(Blob)`
  background: radial-gradient(
    circle,
    rgba(0, 80, 70, 0.8),
    rgba(0, 20, 20, 0.5)
  );
  bottom: -200px;
  right: -150px;
`;


const DarkGreenBlob2 = styled(Blob)`
  background: radial-gradient(
    circle,
    rgba(0, 80, 70, 0.8),
    rgba(0, 20, 20, 0.5)
  );
  bottom: 25rem;
  right: 20rem;
`;

const BlackPatch = styled(Blob)`
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0)
  );
  top: 30%;
  left: 40%;
  opacity: 0.85;
`;

const BlackPatch2 = styled(Blob)`
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0)
  );
  top: 20%;
  left: 30%;
  opacity: 0.85;
`;

export const LandingBackground = () => {
  return (
    <Background>
        <BlackPatch2 $float={floatTwo} duration={4}/>
        <BlackPatch $float={floatThree}duration={6} />

        <GreenBlob $float={floatOne} duration={8} />
        <DarkGreenBlob $float={floatTwo}duration={10} />
        <GreenBlob2 $float={floatThree} duration={14} />
        <DarkGreenBlob2 $float={floatFour} duration={12}/>
    </Background>
  );
}