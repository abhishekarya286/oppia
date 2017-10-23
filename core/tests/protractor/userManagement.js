// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview End-to-end tests for user management.
 */

var general = require('../protractor_utils/general.js');
var LibraryPage = require('../protractor_utils/LibraryPage.js');
var usersPage = require('../protractor_utils/UsersPage.js');
var workflow = require('../protractor_utils/workflow.js');

var usersPage = new UsersPage.UsersPage()

describe('Account creation', function() {
  var libraryPage = null;
  
  beforeEach(function() {
    libraryPage = new LibraryPage.LibraryPage();
  });

  it('should create users', function() {
    usersPage.createUser(
      'ordinaryuser@userManagement.com', 'ordinaryUserManagement');

<<<<<<< HEAD
    users.login('ordinaryuser@userManagement.com');
    libraryPage.get();
=======
    usersPage.login('ordinaryuser@userManagement.com');
    browser.get(general.LIBRARY_URL_SUFFIX);
>>>>>>> fix #3954 add UsersPage page object
    general.checkForConsoleErrors([]);

    browser.get(general.MODERATOR_URL_SUFFIX);
    general.checkForConsoleErrors([
      'Failed to load resource: the server responded with a status of 401']);
    usersPage.logout();
  });

  it('should create moderators', function() {
    usersPage.createModerator('mod@userManagement.com', 'moderatorUserManagement');

    usersPage.login('mod@userManagement.com');
    browser.get(general.MODERATOR_URL_SUFFIX);
    usersPage.logout();

    general.checkForConsoleErrors([]);
  });

  // Usernames containing "admin" are not permitted.
  it('should create admins', function() {
    usersPage.createAdmin('admin@userManagement.com', 'adm1nUserManagement');
    general.checkForConsoleErrors([]);
  });
});
