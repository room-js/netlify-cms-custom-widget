import CMS from 'netlify-cms-app';
import { CustomWidgetControl, CustomWidgetPreview } from '../components/customWidget';

CMS.registerWidget('mywidget', CustomWidgetControl, CustomWidgetPreview);
