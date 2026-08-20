# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- New `click_sound` option: plays a sound clip when a keypad or arm/disarm button is pressed, giving audible confirmation of a press on devices with no tactile feedback.
- While the alarm is counting down, the pending sound now ducks out for a moment on each button press so the click stays audible, resuming once entry stops.

### Fixed

- The button press sound went silent after the first press, because each press was played from a cloned audio element that was not reliably usable.
- The pending sound could end up playing several times over itself and could not be silenced, because each re-created card instance started its own copy from a saved "was playing" flag.

### Documentation

- Document the `pending_sound` and `hide_arm_options` options, which were missing from the options table.
