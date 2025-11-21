import { Page } from '@playwright/test';

/**
 * Page Object Model for the Login Page of Leaftaps application
 * All locators and actions related to login are defined here
 */
export class LoginPage {
  private page: Page;

  // Locators
  private usernameInput = '#username';
  private passwordInput = '#password';
  private loginButton = '.decorativeSubmit';
  private crmSfaLink = 'text=CRM/SFA';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the login page
   */
  async goto() {
    await this.page.goto('http://leaftaps.com/opentaps/control/main');
  }

  /**
   * Fills in username and password and submits the login form
   * @param username - Username credential
   * @param password - Password credential
   */
  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  /**
   * Clicks on CRM/SFA link after login
   */
  async clickCrmSfa() {
    await this.page.click(this.crmSfaLink);
  }
}
