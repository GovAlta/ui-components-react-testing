import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AccordionRoute } from './routes/components/accordion';
import { BadgeRoute } from './routes/components/badge';
import { ButtonGroupRoute } from './routes/components/button-group';
import { ButtonRoute } from './routes/components/button';
import { CalendarRoute } from './routes/components/calendar';
import { CalloutRoute } from './routes/components/callout';
import { CheckboxRoute } from './routes/components/checkbox';
import { ChipRoute } from './routes/components/chip';
import { CircularProgressRoute } from './routes/components/circular-progress';
import { ContainerRoute } from './routes/components/container';
import { DatePickerRoute } from './routes/components/datepicker';
import { DetailsRoute } from './routes/components/details';
import { DropdownRoute } from './routes/components/dropdown';
import { FileUploadRoute } from './routes/components/file-upload';
import { FormStepperRoute } from './routes/components/form-stepper';
import { HeroBannerRoute } from './routes/components/hero-banner';
import { IconButtonRoute } from './routes/components/icon-button';
import { IconRoute } from './routes/components/icon';
import { InputsRoute } from './routes/components/inputs';
import { MicrositeHeaderRoute } from './routes/components/microsite-header';
import { ModalRoute } from './routes/components/modal';
import { NotificationBannerRoute } from './routes/components/notification-banner';
import { PaginationRoute } from './routes/components/pagination';
import { PopoverRoute } from './routes/components/popover';
import { RadioRoute } from './routes/components/radio';
import { SideMenuRoute } from './routes/components/sidemenu';
import { SkeletonRoute } from './routes/components/skeleton';
import { TableRoute } from './routes/components/table';
import { TabsRoute } from './routes/components/tabs';
import { TextAreaRoute } from './routes/components/text-area';
import { TooltipRoute } from './routes/components/tooltip';
import { BlockRoute } from './routes/utility/block';
import { DividerRoute } from './routes/utility/divider';
import { FormItemRoute } from './routes/utility/form-item';
import { GridRoute } from './routes/utility/grid';
import { SpacerRoute } from './routes/utility/spacer';
import App from './App';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="accordion" element={<AccordionRoute />} />
          <Route path="badge" element={<BadgeRoute />} />
          <Route path="button-group" element={<ButtonGroupRoute />} />
          <Route path="button" element={<ButtonRoute />} />
          <Route path="calendar" element={<CalendarRoute />} />
          <Route path="callout" element={<CalloutRoute />} />
          <Route path="checkbox" element={<CheckboxRoute />} />
          <Route path="chip" element={<ChipRoute />} />
          <Route path="circular-progress" element={<CircularProgressRoute />} />
          <Route path="container" element={<ContainerRoute />} />
          <Route path="datepicker" element={<DatePickerRoute />} />
          <Route path="details" element={<DetailsRoute />} />
          <Route path="dropdown" element={<DropdownRoute />} />
          <Route path="file-upload" element={<FileUploadRoute />} />
          <Route path="form-stepper" element={<FormStepperRoute />} />
          <Route path="hero-banner" element={<HeroBannerRoute />} />
          <Route path="icon-button" element={<IconButtonRoute />} />
          <Route path="icon" element={<IconRoute />} />
          <Route path="inputs" element={<InputsRoute />} />
          <Route path="microsite-header" element={<MicrositeHeaderRoute />} />
          <Route path="modal" element={<ModalRoute />} />
          <Route path="notification-banner" element={<NotificationBannerRoute />} />
          <Route path="pagination" element={<PaginationRoute />} />
          <Route path="popover" element={<PopoverRoute />} />
          <Route path="radio" element={<RadioRoute />} />
          <Route path="sidemenu" element={<SideMenuRoute />} />
          <Route path="skeleton" element={<SkeletonRoute />} />
          <Route path="table" element={<TableRoute />} />
          <Route path="tabs" element={<TabsRoute />} />
          <Route path="text-area" element={<TextAreaRoute />} />
          <Route path="tooltip" element={<TooltipRoute />} />
          <Route path="block" element={<BlockRoute />} />
          <Route path="divider" element={<DividerRoute />} />
          <Route path="form-item" element={<FormItemRoute />} />
          <Route path="grid" element={<GridRoute />} />
          <Route path="spacer" element={<SpacerRoute />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
