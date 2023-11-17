import { GoAAppFooter, GoAAppHeader, GoAAppHeaderMenu, GoAMicrositeHeader, GoASideMenu, GoASideMenuGroup, GoATwoColumnLayout } from '@abgov/react-components';
import { Link, Outlet } from 'react-router-dom';

export function App() {
  return (
    <GoATwoColumnLayout
      maxContentWidth="1400px"
      navColumnWidth="30ch"
      header={<>
        <GoAMicrositeHeader type="alpha" version="UAT" />
        <GoAAppHeader heading="Design Systems" maxContentWidth="1400px">
          <a href="#">Support</a>
          <GoAAppHeaderMenu heading="Tickets" leadingIcon="ticket">
            <a href="#">Cases</a>
            <a href="#">Payments</a>
            <a href="#">Outstanding</a>
          </GoAAppHeaderMenu>
          <a href="#" className="interactive">Sign in</a>
        </GoAAppHeader>
      </>}
      nav={<>
        <GoASideMenu>
          <GoASideMenuGroup heading="Components">
            <Link to="/accordion">Accordion</Link>
            <Link to="/badge">Badge</Link>
            <Link to="/button">Button</Link>
            <Link to="/button-group">Button Group</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/callout">Callout</Link>
            <Link to="/checkbox">Checkbox</Link>
            <Link to="/chip">Chip</Link>
            <Link to="/circular-progress">Circular Progress</Link>
            <Link to="/container">Container</Link>
            <Link to="/datepicker">Datepicker</Link>
            <Link to="/details">Details</Link>
            <Link to="/dropdown">Dropdown</Link>
            <Link to="/file-upload">File Upload</Link>
            <Link to="/form-stepper">Form Stepper</Link>
            <Link to="/hero-banner">Hero Banner</Link>
            <Link to="/icon">Icon</Link>
            <Link to="/icon-button">Icon Button</Link>
            <Link to="/inputs">Inputs</Link>
            <Link to="/modal">Modal</Link>
            <Link to="/notification-banner">Notification Banner</Link>
            <Link to="/pagination">Pagination</Link>
            <Link to="/popover">Popover</Link>
            <Link to="/radio">Radio</Link>
            <Link to="/sidemenu">Side Menu</Link>
            <Link to="/skeleton">Skeleton</Link>
            <Link to="/table">Table</Link>
            <Link to="/tabs">Tabs</Link>
            <Link to="/text-area">Text Area</Link>
            <Link to="/tooltip">Tooltip</Link>
          </GoASideMenuGroup>
          <GoASideMenuGroup heading="Utils">
            <Link to="/block">Block</Link>
            <Link to="/divider">Divider</Link>
            <Link to="/form-item">Form Item</Link>
            <Link to="/grid">Grid</Link>
            <Link to="/spacer">Spacer</Link>
          </GoASideMenuGroup>
        </GoASideMenu>
      </>}
      footer={<>
        <GoAAppFooter maxContentWidth="1400px"></GoAAppFooter>
      </>}
    >
      <Outlet />
    </GoATwoColumnLayout>
  );
}

export default App;
