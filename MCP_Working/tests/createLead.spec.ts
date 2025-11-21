import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/LoginPage';
import { CreateLeadPage } from '../pages/CreateLeadPage';

/**
 * Test script to create a lead in Leaftaps application using Page Object Model
 * All test data except credentials are generated using faker
 */
test('Create Lead in Leaftaps', async ({ page }) => {
  // Credentials
  const username = 'democsr';
  const password = 'crmsfa';

  // Generate test data using faker
  const companyName = faker.company.name();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  // Page Objects
  const loginPage = new LoginPage(page);
  const createLeadPage = new CreateLeadPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(username, password);
  await loginPage.clickCrmSfa();

  // Step 2: Navigate to Create Lead and create a lead
  await createLeadPage.goto();
  await createLeadPage.createLead(companyName, firstName, lastName);

  // Step 3: Assert lead creation (basic check for now)
  await expect(page.locator('text=View Lead')).toBeVisible();

  // Log the created lead details
  console.log(`Lead Created: ${companyName}, ${firstName} ${lastName}`);
});
