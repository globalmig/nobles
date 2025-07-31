declare module 'fullpage.js' {
  interface FullpageOptions {
    autoScrolling: boolean;
    scrollHorizontally: boolean;
    navigation: boolean;
    navigationPosition: string;
    anchors: string[];
    scrollingSpeed: number;
    responsiveWidth: number;
    onLeave: (origin: { index: number }, destination: { index: number }, direction: 'up' | 'down') => void;
  }

  const fullpage: (selector: string, options: FullpageOptions) => void;

  export = fullpage;
}
