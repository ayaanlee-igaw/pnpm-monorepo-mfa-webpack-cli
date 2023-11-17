<template>
  <h2>Cascader</h2>

  <div>
    <el-cascader
      v-model="value"
      class="el-cascader--large"
      :options="options"
      @change="handleChange" />
    <el-cascader
      v-model="value"
      class="el-cascader--medium"
      :options="options"
      :props="props"
      disabled
      @change="handleChange" />
    <el-cascader
      v-model="value"
      class="el-cascader--small"
      :options="options"
      :props="props"
      @change="handleChange" />
    <el-cascader
      v-model="value"
      class="el-cascader--mini"
      :options="options"
      :props="props"
      @change="handleChange" />
  </div>

  <div>
    <p>Display all tags (default)</p>
    <el-cascader
      :options="options2"
      :props="props2"
      clearable
      filterable />
    <p>Collapse tags</p>
    <el-cascader
      :options="options2"
      :props="props2"
      collapse-tags
      clearable />
    <p>Collapse tags tooltip</p>
    <el-cascader
      :options="options2"
      :props="props2"
      collapse-tags
      collapse-tags-tooltip
      clearable />
    <p>Max Collapse Tags</p>
    <el-cascader
      :options="options2"
      :props="props2"
      collapse-tags
      collapse-tags-tooltip
      max-collapse-tags="3"
      clearable />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const value = ref([]);

  const props = {
    expandTrigger: "hover" as const,
  };

  const props2 = { multiple: true };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (change: any) => {
    console.log(change);
  };

  const options = [
    {
      value: "guide",
      label: "Guide",
      disabled: true,
      children: [
        {
          value: "disciplines",
          label: "Disciplines",
          children: [
            {
              value: "consistency",
              label: "Consistency",
            },
            {
              value: "feedback",
              label: "Feedback",
            },
            {
              value: "efficiency",
              label: "Efficiency",
            },
            {
              value: "controllability",
              label: "Controllability",
            },
          ],
        },
        {
          value: "navigation",
          label: "Navigation",
          children: [
            {
              value: "side nav",
              label: "Side Navigation",
            },
            {
              value: "top nav",
              label: "Top Navigation",
            },
          ],
        },
      ],
    },
    {
      value: "component",
      label: "Component",
      children: [
        {
          value: "basic",
          label: "Basic",
          children: [
            {
              value: "layout",
              label: "Layout",
            },
            {
              value: "color",
              label: "Color",
            },
            {
              value: "typography",
              label: "Typography",
            },
            {
              value: "icon",
              label: "Icon",
            },
            {
              value: "button",
              label: "Button",
            },
          ],
        },
        {
          value: "form",
          label: "Form",
          children: [
            {
              value: "radio",
              label: "Radio",
            },
            {
              value: "checkbox",
              label: "Checkbox",
            },
            {
              value: "input",
              label: "Input",
            },
            {
              value: "input-number",
              label: "InputNumber",
            },
            {
              value: "select",
              label: "Select",
            },
            {
              value: "cascader",
              label: "Cascader",
            },
            {
              value: "switch",
              label: "Switch",
            },
            {
              value: "slider",
              label: "Slider",
            },
            {
              value: "time-picker",
              label: "TimePicker",
            },
            {
              value: "date-picker",
              label: "DatePicker",
            },
            {
              value: "datetime-picker",
              label: "DateTimePicker",
            },
            {
              value: "upload",
              label: "Upload",
            },
            {
              value: "rate",
              label: "Rate",
            },
            {
              value: "form",
              label: "Form",
            },
          ],
        },
        {
          value: "data",
          label: "Data",
          children: [
            {
              value: "table",
              label: "Table",
            },
            {
              value: "tag",
              label: "Tag",
            },
            {
              value: "progress",
              label: "Progress",
            },
            {
              value: "tree",
              label: "Tree",
            },
            {
              value: "pagination",
              label: "Pagination",
            },
            {
              value: "badge",
              label: "Badge",
            },
          ],
        },
        {
          value: "notice",
          label: "Notice",
          children: [
            {
              value: "alert",
              label: "Alert",
            },
            {
              value: "loading",
              label: "Loading",
            },
            {
              value: "message",
              label: "Message",
            },
            {
              value: "message-box",
              label: "MessageBox",
            },
            {
              value: "notification",
              label: "Notification",
            },
          ],
        },
        {
          value: "navigation",
          label: "Navigation",
          children: [
            {
              value: "menu",
              label: "Menu",
            },
            {
              value: "tabs",
              label: "Tabs",
            },
            {
              value: "breadcrumb",
              label: "Breadcrumb",
            },
            {
              value: "dropdown",
              label: "Dropdown",
            },
            {
              value: "steps",
              label: "Steps",
            },
          ],
        },
        {
          value: "others",
          label: "Others",
          children: [
            {
              value: "dialog",
              label: "Dialog",
            },
            {
              value: "tooltip",
              label: "Tooltip",
            },
            {
              value: "popover",
              label: "Popover",
            },
            {
              value: "card",
              label: "Card",
            },
            {
              value: "carousel",
              label: "Carousel",
            },
            {
              value: "collapse",
              label: "Collapse",
            },
          ],
        },
      ],
    },
    {
      value: "resource",
      label: "Resource",
      children: [
        {
          value: "axure",
          label: "Axure Components",
        },
        {
          value: "sketch",
          label: "Sketch Templates",
        },
        {
          value: "docs",
          label: "Design Documentation",
        },
      ],
    },
  ];
  const options2 = [
    {
      value: 1,
      label: "Asia",
      children: [
        {
          value: 2,
          label: "China",
          children: [
            { value: 3, label: "Beijing" },
            { value: 4, label: "Shanghai" },
            { value: 5, label: "Hangzhou" },
          ],
        },
        {
          value: 6,
          label: "Japan",
          children: [
            { value: 7, label: "Tokyo" },
            { value: 8, label: "Osaka" },
            { value: 9, label: "Kyoto" },
          ],
        },
        {
          value: 10,
          label: "Korea",
          children: [
            { value: 11, label: "Seoul" },
            { value: 12, label: "Busan" },
            { value: 13, label: "Taegu" },
          ],
        },
      ],
    },
    {
      value: 14,
      label: "Europe",
      children: [
        {
          value: 15,
          label: "France",
          children: [
            { value: 16, label: "Paris" },
            { value: 17, label: "Marseille" },
            { value: 18, label: "Lyon" },
          ],
        },
        {
          value: 19,
          label: "UK",
          children: [
            { value: 20, label: "London" },
            { value: 21, label: "Birmingham" },
            { value: 22, label: "Manchester" },
          ],
        },
      ],
    },
    {
      value: 23,
      label: "North America",
      children: [
        {
          value: 24,
          label: "US",
          children: [
            { value: 25, label: "New York" },
            { value: 26, label: "Los Angeles" },
            { value: 27, label: "Washington" },
          ],
        },
        {
          value: 28,
          label: "Canada",
          children: [
            { value: 29, label: "Toronto" },
            { value: 30, label: "Montreal" },
            { value: 31, label: "Ottawa" },
          ],
        },
      ],
    },
  ];
</script>

<style scoped></style>
