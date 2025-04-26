import React from 'react';
import {
    List
} from 'semantic-ui-react';

export const renderStaticListTriggerOrder = () => ( <
    List >
    <
    List.Item >
    <
    List.Content > 1. Loads the original record from the database or initializes the record
    for an upsert statement. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 2. Loads the new record field values from the request and overwrites the old values. < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.Salesforce performs different validation checks depending on the type of request. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > b.For requests from a standard UI edit page, Salesforce runs these system validation checks on the record: < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > 1. a.Compliance with layout - specific rules < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 2. a.Required values at the layout level and field - definition level < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 3. a.Valid field formats < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 4. a.Maximum field length < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > c.If the request is from a User object on a standard UI edit page, Salesforce runs custom validation rules. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > d.For requests from multiline item creation such as quote line items and opportunity line items, Salesforce runs custom validation rules. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > e.For requests from other sources such as an Apex application or a SOAP API call, Salesforce validates only the foreign keys and restricted picklists.Before executing a trigger, Salesforce verifies that any custom foreign keys don’ t refer to the object itself. < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 3. Executes record - triggered flows < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.that are configured to run before the record is saved. < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 4. Executes all before triggers. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 5. Runs most system validation steps again < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.such as verifying that all required fields have a non - null value, and runs any custom validation rules. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > b.The only system validation that Salesforce doesn 't run a second time (when the request comes from a standard UI edit page) is the enforcement of layout-specific rules.</List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 6. Executes duplicate rules. < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.If the duplicate rule identifies the record as a duplicate and uses the block action, the record isn’ t saved and no further steps < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > 1. a.such as after triggers and workflow rules, are taken. < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 7. Saves the record to the database < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.but doesn 't commit yet.</List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 8. Executes all after triggers. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 9. Executes assignment rules. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 10. Executes auto - response rules. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 11. Executes workflow rules. < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.If there are workflow field updates < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > 1. a.Updates the record again. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 2. a.Runs system validations again.Custom validation rules, flows, duplicate rules, processes built with Process Builder, and escalation rules aren’ t run again. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 3. a.Executes before update triggers and after update triggers, regardless of the record operation(insert or update), one more time(and only one more time) < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 12. Executes escalation rules. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 13. Executes these Salesforce Flow automations < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.but not in a guaranteed order. < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > 1. a.Processes built with Process Builder < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 2. a.Flows launched by workflow rules(flow trigger workflow actions pilot) < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 3. a.When a process or flow executes a DML operation, the affected record goes through the save procedure. < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 14. Executes record - triggered flows that are configured to run after the record is saved. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 15. Executes entitlement rules. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 16. If the record contains a roll - up summary field or is part of a cross - object workflow < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.Performs calculations and updates the roll - up summary field in the parent record. < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > 1. a.Parent record goes through save procedure. < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 17. If the parent record is updated, and a grandparent record contains a roll - up summary field or is part of a cross - object workflow < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.Performs calculations and updates the roll - up summary field in the grandparent record. < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > 1. a.Grandparent record goes through save procedure. < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 18. Executes Criteria Based Sharing evaluation. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 19. Commits all DML operations to the database. < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 20. After the changes are committed to the database, executes post - commit logic. < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > a.Examples of post - commit logic( in no particular order) include: < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > 1. a.Sending email < /List.Content> <
    /List.Item> <
    List.Item >
    <
    List.Content > 2. a.Enqueued asynchronous Apex jobs < /List.Content> <
    List.List >
    <
    List.Item >
    <
    List.Content > 1. a.a including queueable jobs and future methods < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    List.Item >
    <
    List.Content > 3. a.Asynchronous paths in record - triggered flows < /List.Content> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    /List.List> <
    /List.Item> <
    /List>
);

export const renderStepListTriggerOrder = (step) => {
    switch (step) {
        case '1':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 1. Loads the original record from the database or initializes the record
                for an upsert statement. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '2':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 2. Loads the new record field values from the request and overwrites the old values. < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.Salesforce performs different validation checks depending on the type of request. < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > b.For requests from a standard UI edit page, Salesforce runs these system validation checks on the record: < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > 1. a Compliance with layout - specific rules < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > 2. a.Required values at the layout level and field - definition level < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > 3. a.Valid field formats < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > 4. a.Maximum field length < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                List.Item >
                <
                List.Content > c.If the request is from a User object on a standard UI edit page, Salesforce runs custom validation rules. < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > d.For requests from multiline item creation such as quote line items and opportunity line items, Salesforce runs custom validation rules. < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > e.For requests from other sources such as an Apex application or a SOAP API call, Salesforce validates only the foreign keys and restricted picklists.Before executing a trigger, Salesforce verifies that any custom foreign keys don’ t refer to the object itself. < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '3':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 3. Executes record - triggered flows < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.that are configured to run before the record is saved. < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '4':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 4. Executes all before triggers. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '5':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 5. Runs most system validation steps again < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.such as verifying that all required fields have a non - null value, and runs any custom validation rules. < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > b.The only system validation that Salesforce doesn 't run a second time (when the request comes from a standard UI edit page) is the enforcement of layout-specific rules.</List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '6':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 6. Executes duplicate rules. < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.If the duplicate rule identifies the record as a duplicate and uses the block action, the record isn’ t saved and no further steps < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > 1. a.such as after triggers and workflow rules, are taken. < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '7':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 7. Saves the record to the database < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.but doesn 't commit yet.</List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '8':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 8. Executes all after triggers. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '9':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 9. Executes assignment rules. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '10':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 10. Executes auto - response rules. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '11':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 11. Executes workflow rules. < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.If there are workflow field updates < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > 1. a.Updates the record again. < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > 2. a.Runs system validations again.Custom validation rules, flows, duplicate rules, processes built with Process Builder, and escalation rules aren’ t run again. < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > 3. a.Executes before update triggers and after update triggers, regardless of the record operation(insert or update), one more time(and only one more time) < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '12':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 12. Executes escalation rules. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '13':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 13. Executes these Salesforce Flow automations < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.but not in a guaranteed order. < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > 1. a.Processes built with Process Builder < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > 2. a.Flows launched by workflow rules(flow trigger workflow actions pilot) < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > 3. a.When a process or flow executes a DML operation, the affected record goes through the save procedure. < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '14':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 14. Executes record - triggered flows that are configured to run after the record is saved. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '15':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 15. Executes entitlement rules. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '16':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 16. If the record contains a roll - up summary field or is part of a cross - object workflow < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.Performs calculations and updates the roll - up summary field in the parent record. < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > 1. a.Parent record goes through save procedure. < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '17':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 17. If the parent record is updated, and a grandparent record contains a roll - up summary field or is part of a cross - object workflow < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.Performs calculations and updates the roll - up summary field in the grandparent record. < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > 1. a.Grandparent record goes through save procedure. < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        case '18':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 18. Executes Criteria Based Sharing evaluation. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '19':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 19. Commits all DML operations to the database. < /List.Content> <
                /List.Item> <
                /List>
            );
        case '20':
            return ( <
                List >
                <
                List.Item >
                <
                List.Content > 20. After the changes are committed to the database, executes post - commit logic. < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > a.Examples of post - commit logic( in no particular order) include: < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > 1. a.Sending email < /List.Content> <
                /List.Item> <
                List.Item >
                <
                List.Content > 2. a.Enqueued asynchronous Apex jobs < /List.Content> <
                List.List >
                <
                List.Item >
                <
                List.Content > 1. a..a including queueable jobs and future methods < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                List.Item >
                <
                List.Content > 3. a.Asynchronous paths in record - triggered flows < /List.Content> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List.List> <
                /List.Item> <
                /List>
            );
        default:
            return null;
    }
};