import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ICommandPalette } from '@jupyterlab/apputils';

import '../style/index.css';
import cheControls = require("./cheControls");


function activate(app: JupyterFrontEnd, palette: ICommandPalette) {

  // Hide Che Sidebar
  const hide_command = 'che-sidebar-visibility-jupyter-extension:hide';
  app.commands.addCommand(hide_command, {
    label: 'Hide Che Side Panel',
    isEnabled: () => true,
    execute: args => {
      cheControls.hideNavbar()
    }
  });
  palette.addItem({command: hide_command, category: 'Che'});

  // Show Che Sidebar
  const show_command = 'che-sidebar-visibility-jupyter-extension:show';
  app.commands.addCommand(show_command, {
    label: 'Show Che Side Panel',
    isEnabled: () => true,
    execute: args => {
      cheControls.showNavbar()
    }
  });
  palette.addItem({command: show_command, category: 'Che'});

  console.log('JupyterLab extension che-sidebar-visibility-jupyter-extension is activated!');
};

/**
 * Initialization data for the che-sidebar-visibility-jupyter-extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'che-sidebar-visibility-jupyter-extension:extension',
  autoStart: true,
  requires: [ICommandPalette],
  activate: activate
};

export default extension;
