# application-container
Graphic User Interface Application Container

## What

Pure ES6+ OOP Class Implementation of the Application/Container/Component/Repeater

## Why

DOM has Elements, but Application has Containers/Components

## How

Embrace Element Node Objects, don't use templating or elementById use Object References

## Reconciliation Strategy

1. Once User Interface Components are Initialized the Application Structure is Frozen.
  - No application structure changes at runtime.
  - Components cannot be dynamically added or removed.
  - Component properties can be updated
  - To create a list of something, create a known number of rows, and then update properties/data.
  - Use pager or grid pattern to avoid the need to alter application structure
