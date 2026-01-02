import type { Meta, StoryObj } from "@storybook/vue3";
import Modal from "./modal.vue";
import { Button } from "../Button";
import { ref } from "vue";

const meta: Meta<typeof Modal> = {
  title: "Components/Actions/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    open: { control: "boolean" },
    closeButton: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
    closeBackdrop: { control: "boolean" },
    placement: {
      control: { type: "select" },
      options: ["top", "middle", "bottom", "start", "end"],
    },
    classBox: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const defaultTplStr = `
<div>
  <Button @click="showModal">Open modal</Button>
  <Modal ref="modalRef" v-bind="args">
    <h3 class="font-bold text-lg">Hi o/ !</h3>
    <p class="py-4">Press ESC key or backdrop to close</p>
  </Modal>
</div>
`;

const defaultSetupStr = `
<script setup>
const modalRef = ref(null)

const showModal = () => {
  if (modalRef.value) {
    modalRef.value.showModal()
  }
}
</script>
`;

const withActionsTplStr = `
<div>
  <Button @click="modalRef.showModal()">Open modal with actions</Button>
  <Modal ref="modalRef">
    <h3 class="font-bold text-lg">Confirmation</h3>
    <p class="py-4">Are you sure about that?</p>
    <template #actions>
      <div class="modal-action">
        <Button @click="modalRef.closeModal()" variant="error">No.</Button>
        <Button @click="modalRef.closeModal()" variant="success">YES !</Button>
      </div>
    </template>
  </Modal>
</div>
`;

const withActionsSetupStr = `
<script setup>

const modalRef = ref(null)

</script>
`;

const placementsTplStr = `
<div class="flex flex-wrap gap-4 justify-center p-4">
  <div>
    <Button @click="topModalRef.showModal()">Top</Button>
    <Modal ref="topModalRef" placement="top">
      <h3 class="font-bold text-lg">Modal Top</h3>
      <p class="py-4">Moves the modal to top </p>
    </Modal>
  </div>
  
  <div>
    <Button @click="middleModalRef.showModal()">Middle</Button>
    <Modal ref="middleModalRef" placement="middle">
      <h3 class="font-bold text-lg">Modal Middle</h3>
      <p class="py-4">Moves the modal to middle </p>
    </Modal>
  </div>
  
  <div>
    <Button @click="bottomModalRef.showModal()">Bottom</Button>
    <Modal ref="bottomModalRef" placement="bottom">
      <h3 class="font-bold text-lg">Modal Bottom</h3>
      <p class="py-4">Moves the modal to bottom </p>
    </Modal>
  </div>
  
  <div>
    <Button @click="startModalRef.showModal()">Start</Button>
    <Modal ref="startModalRef" placement="start">
      <h3 class="font-bold text-lg">Modal Start</h3>
      <p class="py-4">Moves the modal to start horizontally </p>
    </Modal>
  </div>
  
  <div>
    <Button @click="endModalRef.showModal()">End</Button>
    <Modal ref="endModalRef" placement="end">
      <h3 class="font-bold text-lg">Modal End</h3>
      <p class="py-4">Moves the modal to end horizontally </p>
    </Modal>
  </div>
</div>
`;

const placementsSetupStr = `
<script setup>

const topModalRef = ref(null)
const middleModalRef = ref(null)
const bottomModalRef = ref(null)
const startModalRef = ref(null)
const endModalRef = ref(null)

</script>
`;

// DEFAULT MODAL
export const DefaultModal: Story = {
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const modalRef = ref<InstanceType<typeof Modal> | null>(null);

      const showModal = () => {
        if (modalRef.value) {
          modalRef.value.showModal();
        }
      };

      return { args, modalRef, showModal };
    },
    template: defaultTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: `${defaultSetupStr}\n${defaultTplStr}`,
        language: "html",
      },
    },
  },
};

// MODAL WITH ACTIONS
export const ModalWithActions: Story = {
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const modalRef = ref<InstanceType<typeof Modal> | null>(null);

      const showModal = () => {
        modalRef.value?.showModal();
      };

      const closeModal = () => {
        if (modalRef.value) {
          modalRef.value.closeModal();
        }
      };

      return { modalRef, showModal, closeModal };
    },
    template: withActionsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: `${withActionsSetupStr}\n${withActionsTplStr}`,
        language: "html",
      },
    },
  },
};

// MODAL PLACEMENTS
export const ModalPlacements: Story = {
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const topModalRef = ref<InstanceType<typeof Modal> | null>(null);
      const middleModalRef = ref<InstanceType<typeof Modal> | null>(null);
      const bottomModalRef = ref<InstanceType<typeof Modal> | null>(null);
      const startModalRef = ref<InstanceType<typeof Modal> | null>(null);
      const endModalRef = ref<InstanceType<typeof Modal> | null>(null);

      return {
        topModalRef,
        middleModalRef,
        bottomModalRef,
        startModalRef,
        endModalRef,
      };
    },
    template: placementsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: `${placementsSetupStr}\n${placementsTplStr}`,
        language: "html",
      },
    },
  },
};
