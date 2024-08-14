import React, { useRef,useEffect } from 'react'
import PlaneScene from '../assets/3d/plane2.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
function Plane({isRotating,...props}) {
    const {nodes, materials,scene,animations} =useGLTF(PlaneScene)
    const group=useRef()
    const {actions}=useAnimations(animations,group);
    useEffect(() => {
      if(isRotating){
        actions['Take 001'].play()
      }else{
        actions['Take 001'].stop()
      }
    }, [actions,isRotating])
    
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="e5bd376021cc4d0db8c4771a7e886884fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.0095}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_37.skeleton}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_40"
                    geometry={nodes.Object_40.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_40.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name="Object_43"
                    geometry={nodes.Object_43.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_43.skeleton}
                  />
                  <skinnedMesh
                    name="Object_45"
                    geometry={nodes.Object_45.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_45.skeleton}
                  />
                  <skinnedMesh
                    name="Object_46"
                    geometry={nodes.Object_46.geometry}
                    material={materials.backplane1}
                    skeleton={nodes.Object_46.skeleton}
                  />
                  <skinnedMesh
                    name="Object_47"
                    geometry={nodes.Object_47.geometry}
                    material={materials.final_plane_tex}
                    skeleton={nodes.Object_47.skeleton}
                  />
                  <skinnedMesh
                    name="Object_49"
                    geometry={nodes.Object_49.geometry}
                    material={materials.light1}
                    skeleton={nodes.Object_49.skeleton}
                  />
                  <skinnedMesh
                    name="Object_51"
                    geometry={nodes.Object_51.geometry}
                    material={materials.lambert1}
                    skeleton={nodes.Object_51.skeleton}
                  />
                  <skinnedMesh
                    name="Object_53"
                    geometry={nodes.Object_53.geometry}
                    material={materials.lambert1}
                    skeleton={nodes.Object_53.skeleton}
                  />
                  <skinnedMesh
                    name="Object_55"
                    geometry={nodes.Object_55.geometry}
                    material={materials.lambert1}
                    skeleton={nodes.Object_55.skeleton}
                  />
                  <skinnedMesh
                    name="Object_57"
                    geometry={nodes.Object_57.geometry}
                    material={materials.lambert1}
                    skeleton={nodes.Object_57.skeleton}
                  />
                  <group name="Object_8" position={[0, -118.527, 0]} />
                  <group name="Object_10" position={[0, -118.527, 0]} />
                  <group name="Object_12" position={[0, -118.527, 0]} />
                  <group name="Object_14" position={[0, -118.527, 0]} />
                  <group name="Object_16" position={[0, -118.527, 0]} />
                  <group name="Object_18" position={[0, -118.527, 0]} />
                  <group name="Object_20" position={[0, -118.527, 0]} />
                  <group name="Object_22" position={[0, -118.527, 0]} />
                  <group name="Object_24" position={[0, -118.527, 0]} />
                  <group name="Object_26" position={[0, -118.527, 0]} />
                  <group name="Object_28" position={[0, -118.527, 0]} />
                  <group name="Object_30" position={[0, -118.527, 0]} />
                  <group name="Object_32" position={[0, -118.527, 0]} />
                  <group name="Object_34" position={[0, -118.527, 0]} />
                  <group name="Object_36" position={[0, -118.527, 0]} />
                  <group name="Object_38" position={[0, -118.527, 0]} />
                  <group name="Object_42" position={[0, -118.527, 0]} />
                  <group name="Object_44" position={[0, -118.527, 0]} />
                  <group name="Object_48" position={[0, -118.527, 0]} />
                  <group name="Object_50" position={[0, 0, 28.892]} scale={0.697} />
                  <group name="Object_52" position={[0, 0, 28.892]} scale={0.697} />
                  <group name="Object_54" position={[0, 0, 28.892]} scale={0.697} />
                  <group name="Object_56" position={[0, 0, 28.892]} scale={0.697} />
                  <group name="final_plane" position={[0, -118.527, 0]}>
                    <group name="main">
                      <group name="main_outline" position={[0, 118.527, 0]} />
                      <group name="main_1" position={[0, 118.527, 0]} />
                    </group>
                    <group name="left_muffler">
                      <group name="left_muffler_outline" />
                      <group name="left_muffler_1" />
                    </group>
                    <group name="right_muffler">
                      <group name="right_muffler_outline" />
                      <group name="right_muffler_1" />
                    </group>
                    <group name="left_flap">
                      <group name="left_flap_1" />
                      <group name="left_flap_outline" />
                    </group>
                    <group name="right_flap">
                      <group name="right_flap_1" />
                      <group name="right_flap_outline" />
                    </group>
                    <group name="wheel_support">
                      <group name="wheel_support_1" />
                      <group name="wheel_support_outline" />
                    </group>
                    <group name="left_prop">
                      <group name="left_prop_outline" />
                      <group name="left_prop_1" />
                    </group>
                    <group name="right_prop">
                      <group name="right_prop_outline" />
                      <group name="right_prop_1" />
                    </group>
                    <group name="rudder">
                      <group name="rudder_outline" />
                      <group name="rudder_1" />
                    </group>
                    <group name="elevator">
                      <group name="elevator_outline" position={[0, 118.527, 0]} />
                      <group name="elevator_1" position={[0, 118.527, 0]} />
                    </group>
                    <group name="wheel_frame">
                      <group name="wheel_frame_outline" />
                      <group name="wheel_frame_1" />
                    </group>
                    <group name="door">
                      <group name="door_outline" position={[0, 118.527, 0]} />
                      <group name="door_1" position={[0, 118.527, 0]} />
                    </group>
                    <group name="light" />
                    <group name="rainmesh1" position={[0, 0, 28.892]} scale={0.697} />
                    <group name="rainmesh2" position={[0, 0, 28.892]} scale={0.697} />
                    <group name="rainmesh3" position={[0, 0, 28.892]} scale={0.697} />
                    <group name="rainmesh4" position={[0, 0, 28.892]} scale={0.697} />
                  </group>
                  
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Plane