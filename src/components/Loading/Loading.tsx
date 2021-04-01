import { ILoadingProps } from './types';

import scss from './Loading.module.scss';

import LoadSVG from './images/loading.svg';

const Loading = (props: ILoadingProps) => {
  return (
    <>
      {props.load && (
        <div className={scss.loading}>
          <LoadSVG />
        </div>
      )}
    </>
  );
};

export default Loading;
