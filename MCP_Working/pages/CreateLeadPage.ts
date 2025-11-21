import { Page } from '@playwright/test';

/**
 * Page Object Model for the Create Lead Page of Leaftaps application
 * All locators and actions related to creating a lead are defined here
 */
export class CreateLeadPage {
  private page: Page;

  // Locators
  private createLeadLink = 'text=Create Lead';
  private companyNameInput = '#createLeadForm_companyName';
  private firstNameInput = '#createLeadForm_firstName';
  private lastNameInput = '#createLeadForm_lastName';
  private submitButton = 'input[name="submitButton"]';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the Create Lead page
   */
  async goto() {
    await this.page.click(this.createLeadLink);
  }

  /**
   * Fills in lead details and submits the form
   * @param companyName - Company name for the lead
   * @param firstName - First name for the lead
   * @param lastName - Last name for the lead
   */
  async createLead(companyName: string, firstName: string, lastName: string) {
    await this.page.fill(this.companyNameInput, companyName);
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.click(this.submitButton);
  }
}
