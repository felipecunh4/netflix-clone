import scss from './Loading.module.scss';

import LoadSVG from './images/loading.svg';

const Loading = () => {
  return (
    <div className={scss.loading}>
      <LoadSVG />
    </div>
  );
};

export default Loading;
