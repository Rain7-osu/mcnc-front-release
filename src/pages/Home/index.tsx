import { Button } from '@mui/material';
import { REGISTER_LINK } from '../../common/constants';
import { openTab } from '../../utils/open-tab';
import { Banner } from './Banner';
import { HomePage } from './styles';

export function Home() {
  return (
    <HomePage>
      <Banner />
      <Button
        className="register-button"
        disableElevation
        variant="contained"
        size="medium"
        onClick={() => {
          openTab(REGISTER_LINK);
        }}
      >
        报名链接
      </Button>
    </HomePage>
  );
}
