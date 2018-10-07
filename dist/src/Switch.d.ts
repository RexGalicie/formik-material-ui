import * as React from 'react';
import { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import { FieldProps } from 'formik';
import { Omit } from './types';
export interface SwitchProps extends FieldProps, Omit<MuiSwitchProps, 'form' | 'name' | 'onChange' | 'value' | 'defaultChecked'> {
}
export declare const fieldToSwitch: ({ field, form: { isSubmitting }, disabled, ...props }: SwitchProps) => {
    value: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: any) => void;
    name: string;
    color?: "default" | "primary" | "secondary" | undefined;
    hidden?: boolean | undefined;
    style?: React.CSSProperties | undefined;
    icon?: React.ReactNode;
    media?: string | undefined;
    classes?: Partial<Record<import("@material-ui/core/Switch/Switch").SwitchClassKey, string>> | undefined;
    innerRef?: string | ((instance: any) => any) | React.RefObject<any> | undefined;
    title?: string | undefined;
    children?: React.ReactNode;
    defaultValue?: string | string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | undefined;
    tabIndex?: number | undefined;
    inputMode?: string | undefined;
    is?: string | undefined;
    radioGroup?: string | undefined;
    role?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "false" | "true" | undefined;
    'aria-autocomplete'?: "none" | "both" | "inline" | "list" | undefined;
    'aria-busy'?: boolean | "false" | "true" | undefined;
    'aria-checked'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "page" | "false" | "true" | "step" | "location" | "date" | "time" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: boolean | "false" | "true" | undefined;
    'aria-dropeffect'?: "none" | "copy" | "move" | "link" | "execute" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "false" | "true" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "false" | "true" | undefined;
    'aria-haspopup'?: boolean | "menu" | "grid" | "listbox" | "false" | "true" | "tree" | "dialog" | undefined;
    'aria-hidden'?: boolean | "false" | "true" | undefined;
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "false" | "true" | undefined;
    'aria-multiline'?: boolean | "false" | "true" | undefined;
    'aria-multiselectable'?: boolean | "false" | "true" | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-readonly'?: boolean | "false" | "true" | undefined;
    'aria-relevant'?: "all" | "text" | "additions" | "additions text" | "removals" | undefined;
    'aria-required'?: boolean | "false" | "true" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: boolean | "false" | "true" | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCopyCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCut?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCutCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onPaste?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onPasteCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCompositionEnd?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionStart?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionUpdate?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onFocus?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onFocusCapture?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onBlurCapture?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onChangeCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInput?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInputCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onReset?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onResetCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onSubmit?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onSubmitCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInvalid?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInvalidCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onLoad?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onLoadCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onError?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onErrorCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onKeyDown?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyPress?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyUp?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onAbort?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onAbortCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onCanPlay?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onDurationChange?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onEmptied?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onEncrypted?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onEnded?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onEndedCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onLoadedData?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onLoadStart?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onPause?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onPauseCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onPlay?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onPlayCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onPlaying?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onPlayingCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onProgress?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onProgressCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onRateChange?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSeeked?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSeekedCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSeeking?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSeekingCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onStalled?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onStalledCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSuspend?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSuspendCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onTimeUpdate?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onVolumeChange?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onWaiting?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onWaitingCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onClickCapture?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onContextMenu?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onContextMenuCapture?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onDoubleClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onDoubleClickCapture?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onDrag?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnd?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEndCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnter?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnterCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragExit?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragExitCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragLeave?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragLeaveCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragOver?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragOverCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragStart?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragStartCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDrop?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDropCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onMouseDown?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseDownCapture?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseEnter?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseLeave?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseMove?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseMoveCapture?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseOut?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseOutCapture?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseOver?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseOverCapture?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseUp?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onMouseUpCapture?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onSelect?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onSelectCapture?: ((event: React.SyntheticEvent<HTMLElement>) => void) | undefined;
    onTouchCancel?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchCancelCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchEnd?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchEndCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchMove?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchMoveCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchStart?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchStartCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onPointerDown?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerDownCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerMove?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerMoveCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerUp?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerUpCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerCancel?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerCancelCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerEnter?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerEnterCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerLeave?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOver?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOverCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOut?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOutCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onGotPointerCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onLostPointerCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onScroll?: ((event: React.UIEvent<HTMLElement>) => void) | undefined;
    onScrollCapture?: ((event: React.UIEvent<HTMLElement>) => void) | undefined;
    onWheel?: ((event: React.WheelEvent<HTMLElement>) => void) | undefined;
    onWheelCapture?: ((event: React.WheelEvent<HTMLElement>) => void) | undefined;
    onAnimationStart?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationEnd?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationIteration?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onTransitionEnd?: ((event: React.TransitionEvent<HTMLElement>) => void) | undefined;
    onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLElement>) => void) | undefined;
    component?: string | React.ComponentClass<import("@material-ui/core/ButtonBase/ButtonBase").ButtonBaseProps, any> | React.StatelessComponent<import("@material-ui/core/ButtonBase/ButtonBase").ButtonBaseProps> | undefined;
    action?: ((actions: import("@material-ui/core/ButtonBase/ButtonBase").ButtonBaseActions) => void) | undefined;
    target?: string | undefined;
    download?: any;
    href?: string | undefined;
    hrefLang?: string | undefined;
    rel?: string | undefined;
    type?: string | undefined;
    autoFocus?: boolean | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    buttonRef?: string | ((instance: any) => any) | React.RefObject<any> | undefined;
    centerRipple?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    onFocusVisible?: ((event: React.FocusEvent<any>) => void) | undefined;
    TouchRippleProps?: Partial<Pick<import("react-transition-group/TransitionGroup").IntrinsicTransitionGroupProps<"div"> & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>, "color" | "hidden" | "style" | "title" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "component" | "appear" | "enter" | "exit" | "ref" | "key"> & import("@material-ui/core/styles/withStyles").StyledComponentProps<import("@material-ui/core/ButtonBase/TouchRipple").TouchRippleClassKey> & {
        className?: string | undefined;
        style?: React.CSSProperties | undefined;
    } & {
        center?: boolean | undefined;
    }> | Partial<Pick<import("react-transition-group/TransitionGroup").ComponentTransitionGroupProps<any> & {
        [prop: string]: any;
        children?: React.ReactElement<import("react-transition-group/Transition").TransitionProps> | React.ReactElement<import("react-transition-group/Transition").TransitionProps>[] | undefined;
    }, string | number> & import("@material-ui/core/styles/withStyles").StyledComponentProps<import("@material-ui/core/ButtonBase/TouchRipple").TouchRippleClassKey> & {
        className?: string | undefined;
        style?: React.CSSProperties | undefined;
    } & {
        center?: boolean | undefined;
    }> | undefined;
    checked?: string | boolean | undefined;
    inputRef?: string | ((instance: any) => any) | React.RefObject<any> | undefined;
    checkedIcon?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement> | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    disabled: boolean;
};
declare const Switch: React.ComponentType<SwitchProps>;
export default Switch;