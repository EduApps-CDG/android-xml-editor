/**
 * Copyright (c) 2017-present PlatformIO <contact@platformio.org>
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import * as vscode from 'vscode';

class QuickItem extends vscode.TreeItem {
  constructor(label, command, args, collapsibleState, children) {
    super(label, collapsibleState);
    if (command) {
      this.command = {
        title: label,
        command,
        arguments: args,
      };
    }
    this.customChildren = children;
  }
}

export default class QuickAccessTreeProvider {
  getChildren(element) {
    if (element && element.customChildren) {
      return element.customChildren;
    }
    return [
      new QuickItem(
        'Android XML Editor',
        undefined,
        undefined,
        vscode.TreeItemCollapsibleState.Expanded,
        [
          new QuickItem('Open', 'platformio-ide.open')
        ]
      )
    ];
  }

  getTreeItem(element) {
    return element;
  }
}
